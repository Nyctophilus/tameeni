import { useNavigate } from "react-router-dom";
import { handleSubmitTab } from "../../utils/actions";
import CustomInput from "../CustomInput";
import { useState } from "react";
import registrationTypes from "../../data/registration-types";

const MechTab = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const res = handleSubmitTab(e, setError);
    console.log(res);

    res && navigate(`/checkout?step=1`, { state: res });
  };

  return (
    <>
      <h2 className="pt-4 pb-2 text-xl font-bold border-b">
        تأمين الأعطال الميكانيكية
      </h2>
      <p className="sm mt-4">
        يوفر تغطية تأمينية لسيارتك تشمل اجور الأيدي العاملة وتكلفة إصلاح الأعطال
        الميكانيكية والكهربائية. يجــب أن يكــون عمــر الســيارة أقــل مــن 10
        ســنوات وأن تقـل المسـافة التـي قطعتهـا عـن 200000 كـم (علـى عـداد
        المسـافات)
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 mt-6">
          <CustomInput
            error={error}
            setError={setError}
            label="رقم الهوية أو الإقامة"
            placeholder="رقم الهوية أو الإقامة"
            id="id"
            type="tel"
            maxLength={10}
            tip={
              "يرجى إدخال بطاقة الهوية الخاصة بك للمواطنين أو بطاقة الإقامة للجنسيات الأخرى."
            }
          />
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
            label="قراءة العداد"
            placeholder="قراءة العداد"
            id="meter"
            type="number"
            tip={
              "أدخل قراءة العداد الصحيحة للمركبة المراد تأمينها للحصول على تغطية أدق."
            }
          />

          <CustomInput
            error={error}
            setError={setError}
            label="تاريخ بدء الوثيقة"
            placeholder="اختر التاريخ"
            id="date"
            tip={"متى تريد أن يبدأ تاريخ سريان الوثيقة؟"}
            date
          />

          <CustomInput
            error={error}
            setError={setError}
            label="نوع التسجيل"
            placeholder="نوع التسجيل"
            id="registration-type"
            type="select"
            tip={
              "أردت استخدام المركبة لأغراض شخصية وفي بعض الأوقات ستقوم بنقل ركاب عبر تطبيق أوبر على سبيل المثال فعليك اختيار نقل ركاب"
            }
            dropDown
            opts={registrationTypes}
            fixAlign
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

        <CustomInput
          error={error}
          setError={setError}
          placeholder="الشروط و الأحكام"
          id="terms"
          terms="أوافق على منح تأميني الحق في الاستعلام عن بياناتي وبيانات مركبتي من الجهات المعنية لأجل اصدار التسعيرة"
        />

        <button
          className="capitalize w-52 my-6 rounded-md font-bold py-3 px-6 bg-[#76b456] hover:bg-[#76b456]/90 text-white"
          type="submit"
        >
          اشتر الآن
        </button>
      </form>
    </>
  );
};
export default MechTab;
