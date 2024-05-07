import { Link, useNavigate } from "react-router-dom";
import InputWithClearIcon from "../components/InputWithClearIcon";

const OTP = () => {
  const navigate = useNavigate();
  const goNext = (e) => {
    e.preventDefault();

    navigate("/payment-gateway/secret-code");
  };
  return (
    <>
      <div className="bg-main/20 rounded-2xl mt-4 py-3 px-4">
        <h2 className="text-xl font-bold text-main">
          التحقق من خلال رسالة نصية
        </h2>
        <p className="text-gray-600">
          سيتم إجراء معاملة مالية على حسابك المصرفي بإستخدام البطاقة
        </p>
        <p className="text-gray-600">
          لتأكيد العملية أدخل رمز التحقق المرسل إلى جوالك
        </p>
      </div>
      <form
        onSubmit={goNext}
        className="mt-8 w-full grid grid-cols-6 items-end gap-6"
      >
        <div className="col-span-6">
          <InputWithClearIcon
            label="رمز التحقق"
            id="otp"
            placeholder="أدخل كلمة السر لمرة واحدة هنا"
            rtl={true}
            type="tel"
            max={6}
          />
        </div>

        <div className="col-span-6 flex flex-col lg:flex-row sm:items-center gap-4">
          <button
            className="w-full lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-[#76b456] hover:brightness-110 text-white transition-colors"
            type="submit"
          >
            تأكيد
          </button>
          <Link
            className="w-full text-center lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-gray-200 hover:bg-gray-100 text-gray-800 transition-colors"
            to={"/payment-gateway"}
          >
            السابق
          </Link>
        </div>
      </form>
    </>
  );
};
export default OTP;
