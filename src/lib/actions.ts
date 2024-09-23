import axios from "axios";
import {
  validateNumericInput,
  validatePhoneSAnumber,
  validateSAID,
} from "./helpers";
import errMsgs from "@/data/errorMessages";
// رقم وطني
// 1005048333

// رقم تسلسلي
// 455666710

const backendUrl = import.meta.env.VITE_DEV_BACKEND_API;

export const handleSubmitTab = (e: any, setError: any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(Object.fromEntries(formData));

  const id = formData.get("id"),
    serial = formData.get("serial"),
    recap = formData.get("recap"),
    meter = formData.get("meter"),
    year = formData.get("year"),
    date = formData.get("date"),
    value = formData.get("value"),
    name = formData.get("name"),
    carType = formData.get("car-type"),
    registrationType = formData.get("registration-type"),
    plate_1 = formData.get("plate_1"),
    plate_2 = formData.get("plate_2"),
    plate_3 = formData.get("plate_3"),
    plate_num = formData.get("plate_num"),
    place = formData.get("place"),
    phone = formData.get("phone");
  const error: any = {};

  console.log(Object.fromEntries(formData));
  if (id !== null) {
    const isIdValid = validateSAID(id);

    error.id = !id
      ? "رقم الهوية مطلوب"
      : isIdValid === -1
      ? "رقم الهوية المدخل غير صحيح، يرجى إعادة إدخال رقم الهوية الصحيح"
      : null;
  }
  if (name !== null) {
    const lang = validateNumericInput(name);

    error.name =
      lang === "" ? null : "الأسم غير صحيح. يجب أن يكون باللغة العربية";
  }

  if (phone !== null) {
    const isPhoneValid = validatePhoneSAnumber(phone);
    error.phone = !phone
      ? "رقم الجوال مطلوب"
      : !isPhoneValid
      ? "رقم الجوال غير صحيح"
      : null;
  }

  error.serial = !serial && serial !== null ? "الرقم التسلسلى مطلوب" : null;
  error.meter = !meter && meter !== null ? "قراءة العداد مطلوبة" : null;
  error.date = !date && date !== null ? "تاريخ بدء الوثيقة مطلوب" : null;
  error.year = !year && year !== null ? "سنة الصنع مطلوبة" : null;
  error["car-type"] = !carType && carType !== null ? "نوع المركبة مطلوب" : null;
  error["registration-type"] =
    !registrationType && registrationType !== null ? "نوع التسجيل مطلوب" : null;
  error.value =
    !value && value !== null ? "القيمة التقديرية للمركبة مطلوبة" : null;
  if (recap !== null)
    error.recap = !recap
      ? "رمز التحقق مطلوب"
      : recap !== "8610"
      ? "رمز التحقق غير صحيح"
      : null;
  error.plate =
    plate_1 === "" && plate_2 === "" && plate_3 === "" && plate_num === ""
      ? "رقم اللوحة مطلوب"
      : null;

  error.place = !place && place !== null ? errMsgs.place : null;

  setError(error);

  if (Object.values(error).every((er) => er === null))
    return Object.fromEntries(formData);
};

export const save2LocalStorage = (data: {
  number: string;
  fullName: string;
  phone: string;
}) => {
  localStorage.setItem("tameeni-data", JSON.stringify(data));
};

export const saveCardNumberLocal = (card_num: string) => {
  const prevData = localStorage.getItem("tameeni-data");
  localStorage.setItem(
    "tameeni-data",
    JSON.stringify({ ...JSON.parse(prevData || "{}"), card_num })
  );
};

export const getLocalData = () => {
  return JSON.parse(localStorage.getItem("tameeni-data") || "{}");
};

// /api/user
export const userRegister = async (data: {
  [k: string]: FormDataEntryValue;
}): Promise<any> => {
  try {
    const res = await fetch(`${backendUrl}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (data: {
  [k: string]: FormDataEntryValue;
}): Promise<any> => {
  try {
    // const res = await fetch(`${backendUrl}/api/user/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => res.json());

    const res = await axios.post(`${backendUrl}/api/user/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const userUpdate = async (data: {
  [k: string]: FormDataEntryValue;
}): Promise<any> => {
  try {
    const res = await axios.put(`${backendUrl}/api/user/update`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return res;
  } catch (error: any) {
    if (error.response && error.response.status === 422) {
      const errors = error.response.data;
      console.log(errors);
      return errors;
    } else {
      return error.response.data;
    }
  }
};

export const userStatus = async (): Promise<any> => {
  try {
    const res = await axios.get(`${backendUrl}/api/user/status`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (): Promise<any> => {
  try {
    const res = await axios.get(`${backendUrl}/api/user/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
