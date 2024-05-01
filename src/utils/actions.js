import { validateSAID } from "./helpers";

// رقم وطني
// 1005048333

// رقم تسلسلي
// 455666710

export const handleSubmitTab = (e, recap, setError) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  recap && formData.set("g-recaptcha-response", recap);
  const id = formData.get("id"),
    serial = formData.get("serial"),
    meter = formData.get("meter"),
    date = formData.get("date"),
    reason = formData.get("reason");
  const isIdValid = id !== null ? validateSAID(id) : null;
  const error = {};

  console.log(Object.fromEntries(formData));

  error.id =
    isIdValid === -1
      ? "رقم الهوية المدخل غير صحيح، يرجى إعادة إدخال رقم الهوية الصحيح"
      : null;
  error.serial = !serial && serial !== null ? "الرقم التسلسلى مطلوب" : null;
  error.meter = !meter && meter !== null ? "قراءة العداد مطلوبة" : null;
  error.date = !date && date !== null ? "تاريخ بدء الوثيقة مطلوب" : null;
  error.recap = !recap && recap !== null ? "رمز التحقق مطلوب" : null;

  setError(error);
  console.log(error);

  if (Object.values(error).every((er) => er === null)) {
    console.log("submit");
  }
};
