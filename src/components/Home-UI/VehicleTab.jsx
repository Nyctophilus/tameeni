import CustomInput from "../CustomInput";
import { useState } from "react";
import { handleSubmitTab } from "../../utils/actions";

const VehicleTab = () => {
  const [recap, setRecap] = useState("");
  const [error, setError] = useState({});
  const years = [];
  for (let i = 1906; i <= 2025; i++) {
    years.push(i);
  }

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

      <form onSubmit={(e) => handleSubmitTab(e, recap, setError, error)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-4 mt-6">
          <CustomInput
            label="رقم التسلسل"
            id="serial"
            placeholder="رقم التسلسل"
            type="number"
            tip={
              "يرجى إدخال بطاقة الهوية الخاصة بك للمواطنين أو بطاقة الإقامة للجنسيات الأخرى."
            }
          />
          <CustomInput
            label="رقم الجوال"
            id="phone"
            placeholder="05xxxxxxx"
            type="number"
          />

          <CustomInput
            label="سنة الصنع"
            placeholder="أكتب سنة الصنع"
            id="year"
            type="number"
            dropDown
            opts={years.reverse()}
          />

          <CustomInput
            label="رمز التحقق"
            placeholder="ادخل رمز التحقق"
            id="captcha"
            reCAPTCHA
            setRecap={setRecap}
          />
        </div>

        <p className="text-[#76b456] text-sm">تكلفة الخدمة: 100 درهم إماراتي</p>

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
