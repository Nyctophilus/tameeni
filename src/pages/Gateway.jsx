import { useEffect, useState } from "react";
import { validateLanguage } from "../utils/helpers";
import { Link, useNavigate } from "react-router-dom";

const Gateway = () => {
  const [error, setError] = useState({ name: null, card_num: null, ccv: null });
  const navigate = useNavigate();

  const goToOTP = () => {
    navigate("/payment-gateway/otp");
  };
  return (
    <>
      <div class="bg-main/20 rounded-2xl mt-4 py-3 px-4">
        <h2 class="text-xl font-bold text-main">
          الدفع من خلال بطاقة الائتمان
        </h2>
        <p class="text-gray-600">
          سيتم إحراء معاملة مالية على حسابك المصرفي بإستخدام البطاقة
        </p>
      </div>
      <form action="#" className="mt-8 grid grid-cols-6 items-end gap-6">
        <InputPay
          error={error}
          setError={setError}
          label="إسم حامل البطاقة"
          placeholder="أدخل إسم حامل البطاقة"
          id="name"
          type="text"
        />
        <InputPay
          error={error}
          setError={setError}
          label="رقم البطاقة"
          placeholder="أدخل رقم البطاقة المكون من 16 خانة"
          id="card_num"
          type="tel"
          max={16}
        />

        <InputPay
          error={error}
          setError={setError}
          label="تاريخ الإنتهاء"
          placeholder="شهر"
          id="exp_month"
          type="tel"
          max={2}
          duo={true}
        />
        <InputPay
          error={error}
          setError={setError}
          placeholder="سنة"
          id="exp_year"
          type="text"
          max={4}
          duo={true}
        />

        <InputPay
          error={error}
          setError={setError}
          label="الرمز السري CVV"
          placeholder="أدخل الرمز السري (CVV) خلف البطاقة"
          id="cvv"
          type="tel"
          max={16}
        />

        <div className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
            />

            <span className="text-sm text-gray-700">
              اقر بقراءتي وموافقتي على جميع التفاصيل المكتوبة في هذه الصفحة
            </span>
          </label>
        </div>

        <div className="col-span-6 flex flex-col lg:flex-row sm:items-center gap-4">
          <button
            className="w-full lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-[#76b456] hover:brightness-110 text-white transition-colors"
            type="submit"
            onClick={goToOTP}
          >
            ادفع الآن
          </button>
          <Link
            className="w-full text-center lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-gray-200 hover:bg-gray-100 text-gray-800 transition-colors"
            to={"/checkout?step=4"}
          >
            السابق
          </Link>
        </div>
      </form>
    </>
  );
};
export default Gateway;

const errMsgs = {
  name: "الأسم غير صحيح. يجب أن يكون باللغة الأنجليزية",
  card_num: "رقم البطاقة غير صحيح. يجب أن يكون الرقم مكون من 16 رقم",
  cvv: "رقم cvv غير صحيح. يجب أن يكون الرقم مكون من 16 رقم",
  exp_month: "شهر الانتهاء غير صحيح. يجب أن يكون الرقم مكون من رقمين",
  exp_year: "سنة الانتهاء غير صحيحة. يجب أن يكون الرقم مكون من 4 أرقام",
};

const InputPay = ({
  label,
  type,
  max,
  placeholder,
  id,
  duo,
  error,
  setError,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      const err = {};

      if (id === "name") {
        const lang = validateLanguage(value);

        lang !== "en" && value !== ""
          ? (err.name = errMsgs.name)
          : (err.name = null);
      }

      if (id === "card_num" || id === "cvv") {
        const isValid =
          value.length === 16 && value.match(/^[0-9]+$/) && value !== "";

        isValid ? (err[id] = null) : (err[id] = errMsgs[id]);
      }

      if (id === "exp_month") {
        const isValid =
          value.length === 2 && value.match(/^[0-9]+$/) && value !== "";

        isValid ? (err[id] = null) : (err[id] = errMsgs[id]);
      }
      if (id === "exp_year") {
        const isValid =
          value.length === 4 && value.match(/^[0-9]+$/) && value !== "";

        isValid ? (err[id] = null) : (err[id] = errMsgs[id]);
      }

      setError(err);
    }
  }, [value]);

  return (
    <div className={duo ? "col-span-3" : "col-span-6"}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-800">
        {label}
      </label>

      <input
        className="mt-1 w-full text-right rounded-lg border border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2"
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        maxLength={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p
        className={`text-red-500 text-xs h-4 transition-opacity ${
          error[id] ? "opacity-100" : "opacity-0"
        } ${duo ? "col-span-3" : "col-span-6"}`}
      >
        {error[id]}
      </p>
    </div>
  );
};
