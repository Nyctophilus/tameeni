import { validateLanguage, validateSAID } from "./helpers";

// رقم وطني
// 1005048333

// رقم تسلسلي
// 455666710

export const handleSubmitTab = (e, setError) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get("id"),
    serial = formData.get("serial"),
    recap = formData.get("recap"),
    meter = formData.get("meter"),
    date = formData.get("date"),
    value = formData.get("value"),
    name = formData.get("name"),
    phone = formData.get("phone");
  const error = {};

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

  error.serial = !serial && serial !== null ? "الرقم التسلسلى مطلوب" : null;
  error.meter = !meter && meter !== null ? "قراءة العداد مطلوبة" : null;
  error.date = !date && date !== null ? "تاريخ بدء الوثيقة مطلوب" : null;
  error.phone = !phone && phone !== null ? "رقم الجوال مطلوب" : null;
  error.value =
    !value && value !== null ? "القيمة التقديرية للمركبة مطلوبة" : null;
  if (recap !== null)
    error.recap = !recap
      ? "رمز التحقق مطلوب"
      : recap !== "8610"
      ? "رمز التحقق غير صحيح"
      : null;

  setError(error);

  if (Object.values(error).every((er) => er === null)) {
    // const urlData = new URLSearchParams({
    //   id,
    //   serial,
    //   meter,
    //   date,
    //   phone,
    //   reason,
    // })
    //   .toString()
    //   .split("&")
    //   .filter((q) => !q.includes("null"))
    //   .join("&");

    return Object.fromEntries(formData);
  }
};
