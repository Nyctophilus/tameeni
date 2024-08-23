import { useEffect, useState } from "react";
import CustomInput from "../CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import { handleSubmitTab } from "@/utils/actions";
import CarPanelSelection from "../CarPanelSelection";
import registrationTypes from "../../data/registration-types";
import {
  currentPage,
  details,
  extraInfo,
  permissions,
} from "@/context/signals";

const StepOne = () => {
  const { state } = useLocation();
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleNext = (e: any) => {
    const res = handleSubmitTab(e, setError);

    if (res) {
      const data: any = {
        number: res.id,
        fullName: res.name,
        phone: res.phone,
      };

      permissions.value = [];

      extraInfo.value.fullName = data.fullName;
      extraInfo.value.number = data.number;
      extraInfo.value.phone = data.phone;

      details.value = {
        ...details.value,
        ...data,
        time: new Date(),
      };

      navigate("/checkout/2", {
        state: { ...state, ...res },
        preventScrollReset: false,
      });
    }
  };

  useEffect(() => {
    currentPage.value = "الخطوة الأولى";
  }, []);

  return (
    <form onSubmit={handleNext} className="px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 my-6">
        <CustomInput
          error={error}
          setError={setError}
          label="الغرض من التأمين"
          id="reason"
          tip={
            "شراء وثيقة تأمين لمركبتك الحالية، أو وثيقة تأمين لمركبة بغرض نقل ملكيتها؟"
          }
          biSelect={["تأمين جديد", "نقل ملكية"]}
          disabled
        />
        <CustomInput
          error={error}
          setError={setError}
          label="نوع تسجيل المركبة"
          id="type"
          tip={"هل المركبة مسجلة بالرقم التسلسلي أو برقم البطاقة الجمركية؟"}
          biSelect={["الرقم التسلسلى", "بطاقة جمركية (إستيراد)"]}
          disabled
        />
        <CustomInput
          error={error}
          setError={setError}
          label="إسم مقدم الطلب"
          placeholder="إسم مقدم الطلب"
          id="name"
          type="text"
          disabled
        />
        <CustomInput
          error={error}
          setError={setError}
          defaultValue={state?.id}
          label="رقم الهوية أو الإقامة"
          placeholder="رقم الهوية أو الإقامة أو الشركة"
          id="id"
          type="tel"
          maxLength={10}
          tip={
            "يرجى إدخال بطاقة الهوية الخاصة بك للمواطنين أو بطاقة الإقامة للجنسيات الأخرى."
          }
          disabled
        />
        <CustomInput
          error={error}
          setError={setError}
          defaultValue={state?.serial}
          label="رقم التسلسل"
          placeholder="رقم التسلسل"
          id="serial"
          maxLength={10}
          type="tel"
          tip={
            "أدخل رقم التسلسل الصحيح للمركبة المراد تأمينها للحصول على تغطية أدق."
          }
          disabled
        />
        <CustomInput
          error={error}
          setError={setError}
          defaultValue={state?.phone}
          label="رقم الجوال"
          id="phone"
          placeholder="05xxxxxxx"
          type="tel"
          disabled
        />
        <CustomInput
          error={error}
          setError={setError}
          label="نوع المركبة"
          placeholder="نوع المركبة"
          id="car-type"
          type="text"
          disabled
        />
        <CustomInput
          error={error}
          setError={setError}
          label="سنة الصنع"
          placeholder="أختر سنة الصنع"
          defaultValue={state?.year}
          id="year"
          type="text"
          yearsDD
          hidValue
          disabled
        />
        <CustomInput
          error={error}
          setError={setError}
          label="نوع التسجيل"
          placeholder="أختر نوع التسجيل"
          defaultValue={state?.["registration-type"]}
          id="registration-type"
          type="text"
          tip={
            "أردت استخدام المركبة لأغراض شخصية وفي بعض الأوقات ستقوم بنقل ركاب عبر تطبيق أوبر على سبيل المثال فعليك اختيار نقل ركاب"
          }
          dropDown
          opts={registrationTypes}
          hidValue
          disabled
        />

        <CarPanelSelection error={error} />
        <CustomInput
          error={error}
          setError={setError}
          label="رمز التحقق"
          placeholder="ادخل رمز التحقق"
          id="recap"
          reCAPTCHA
          type={"number"}
          disabled
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
        التالي
      </button>
    </form>
  );
};
export default StepOne;
