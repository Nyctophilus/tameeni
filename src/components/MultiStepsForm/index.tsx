import Main from "@/components/Main";
import { useParams } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import PaymentPage from "./PaymentPage";

export default function MultiStepForm() {
  const { step }: any = useParams();

  const tabs = [
    { title: "البيانات الأساسية", href: "/" },
    { title: "بيانات التأمين", href: "/" },
    { title: "قائمة الأسعار", href: "/" },
    { title: "الملخص و الدفع", href: "/" },
  ];

  return (
    <Main>
      <div className="mb-8 lg:px-8">
        <div className="flex items-center justify-between">
          {tabs.map((tab, i: number) => (
            <span className="relative z-10" key={tab.title}>
              <div className="flex text-center md:text-right flex-col md:flex-row items-center text-sm font-semibold space-x-2">
                <div
                  className={`w-8 h-8 rounded-full border-2 ${
                    i + 1 <= step ? "border-green-500" : "border-gray-300"
                  } ml-2 grid place-items-center bg-white`}
                >
                  <p
                    className={
                      i + 1 <= step ? "text-green-500" : "text-gray-400"
                    }
                  >
                    {i + 1}
                  </p>
                </div>
                <p
                  className={`text-xs mt-2 md:mt-0 md:text-base lg:ms-2 ${
                    i + 1 <= step ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  {tab.title}
                </p>
                {i + 1 <= step && (
                  <CheckIcon className="text-green-500 w-5 h-5 hidden md:block" />
                )}
              </div>
            </span>
          ))}
        </div>
        <div className="relative md:hidden">
          <div
            className={`absolute -top-10 left-1/2 -translate-x-1/2 w-[80%] flex-1 h-1 bg-gray-300`}
          />
          <div
            className={`absolute -top-10 right-14 flex-1 h-1 bg-gradient-to-l from-[#76b740] to-[#76b7402d] rounded-full ${
              step === "1"
                ? "w-[20%]"
                : step === "2"
                ? "w-[40%]"
                : step === "3"
                ? "w-[60%]"
                : "w-[80%]"
            }`}
          />
        </div>
        <div className="mt-2 relative">
          <div
            className={`absolute w-full hidden md:block flex-1 h-1 bg-gray-300`}
          />
          <div
            className={`absolute hidden md:block flex-1 h-1 bg-gradient-to-l from-[#76b740] to-[#76b7402d] rounded-full ${
              step === "1"
                ? "w-1/4"
                : step === "2"
                ? "w-1/2"
                : step === "3"
                ? "w-3/4"
                : "w-full"
            }`}
          />
        </div>
      </div>

      {step === "1" && <StepOne />}
      {step === "2" && <StepTwo />}
      {step === "3" && <StepThree />}
      {step === "4" && <PaymentPage />}
    </Main>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
