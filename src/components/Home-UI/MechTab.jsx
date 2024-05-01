import { handleSubmitTab } from "../../utils/actions";
import CustomInput from "../CustomInput";
import { useState } from "react";

const MechTab = () => {
  const [recap, setRecap] = useState("");
  const [error, setError] = useState({});

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

      <form onSubmit={(e) => handleSubmitTab(e, recap, setError, error)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-4 mt-6">
          <CustomInput
            label="رقم الهوية أو الإقامة"
            placeholder="رقم الهوية أو الإقامة"
            id="id"
            type="number"
            tip={
              "يرجى إدخال بطاقة الهوية الخاصة بك للمواطنين أو بطاقة الإقامة للجنسيات الأخرى."
            }
          />
          <CustomInput
            label="رقم التسلسل"
            placeholder="رقم التسلسل"
            id="serial"
            type="number"
            tip={
              "أدخل رقم التسلسل الصحيح للمركبة المراد تأمينها للحصول على تغطية أدق."
            }
          />
          <CustomInput
            label="قراءة العداد"
            placeholder="قراءة العداد"
            id="meter"
            type="number"
            tip={
              "أدخل قراءة العداد الصحيحة للمركبة المراد تأمينها للحصول على تغطية أدق."
            }
          />

          <CustomInput
            label="تاريخ بدء الوثيقة"
            placeholder="اختر التاريخ"
            id="date"
            tip={"متى تريد أن يبدأ تاريخ سريان الوثيقة؟"}
            date
          />

          <CustomInput
            label="الغرض من الأستخدام"
            placeholder="الغرض من الأستخدام"
            id="reason"
            type="text"
            tip={
              "أردت استخدام المركبة لأغراض شخصية وفي بعض الأوقات ستقوم بنقل ركاب عبر تطبيق أوبر على سبيل المثال فعليك اختيار نقل ركاب"
            }
            dropDown
            opts={[
              "شخصى",
              "تجارى",
              "تأجير",
              "نقل الركاب اوبر-كريم",
              "نقل البضائع",
              "نقل مشتقات نفطية",
            ]}
          />

          <CustomInput
            label="رمز التحقق"
            placeholder="ادخل رمز التحقق"
            id="captcha"
            reCAPTCHA
            setRecap={setRecap}
          />

          <CustomInput
            placeholder="ادخل رمز التحقق"
            id="terms"
            type={"checkbox"}
            terms
          />
        </div>

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
