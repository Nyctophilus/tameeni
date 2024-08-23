import {
  validateLanguage,
  validatePhoneSAnumber,
  validateSAID,
} from "./helpers";

// رقم وطني
// 1005048333

// رقم تسلسلي
// 455666710

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
    const isNameValid = validateLanguage(name);

    error.name = !name
      ? "أسم مقدم الطلب مطلوب"
      : isNameValid !== "ar"
      ? "الأسم غير صحيح. يجب أن يكون باللغة العربية"
      : null;
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

  error.place = !place && place !== null ? "مكان الإصلاح مطلوب" : null;

  // BUG disable validation
  // setError(error);
  // if (Object.values(error).every((er) => er === null))
  return Object.fromEntries(formData);
};
