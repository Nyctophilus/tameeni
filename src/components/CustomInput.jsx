// import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import DateInput from "./DateInput";
import Tooltip from "./Tooltip";
import { validateLanguage, validateSAID } from "../utils/helpers";
import { Option, Select } from "@material-tailwind/react";

const errMsgs = {
  id: "رقم الهوية المدخل غير صحيح، يرجى إعادة إدخال رقم الهوية الصحيح",
  serial: "الرقم التسلسلى غير صحيح",
  meter: "قراءة العداد مطلوبة",
  date: "تاريخ بدء الوثيقة مطلوب",
  phone: "رقم الجوال غير صحيح",
  value: "القيمة التقديرية للمركبة مطلوبة",
  name: "الأسم غير صحيح. يجب أن يكون باللغة العربية",
  recap: "كود التحقق غير صحيح",
};

const CustomInput = ({
  styles,
  defaultValue,
  error,
  setError,
  label,
  id,
  type,
  maxLength,
  placeholder,
  tip,
  date,
  dropDown,
  opts,
  reCAPTCHA,
  terms,
  biSelect,
  fixAlign,
  radio,
}) => {
  const [inpVal, setInpVal] = useState(defaultValue || "");
  useEffect(() => {
    if (inpVal) {
      if (id === "id") {
        const isIdValid = validateSAID(inpVal);
        return setError({
          ...error,
          id: isIdValid === -1 ? errMsgs.id : null,
        });
      } else if (id === "recap") {
        return setError({
          recap: inpVal === "8610" ? null : errMsgs.recap,
        });
      } else if (id === "serial") {
        return setError({
          serial: inpVal.length <= 8 ? errMsgs.serial : null,
        });
      } else if (id === "phone") {
        return setError({
          phone: inpVal.length !== 10 ? errMsgs.phone : null,
        });
      } else if (id === "name") {
        const lang = validateLanguage(inpVal);
        return setError({
          name: lang !== "ar" ? errMsgs.name : null,
        });
      } else {
        return setError({
          [id]: !inpVal && inpVal !== null ? errMsgs[id] : null,
        });
      }
    }
  }, [inpVal]);

  useEffect(() => {
    if (fixAlign) {
      document.querySelector(`button#${id} > span`).style.right = ".75rem";
      document.querySelector(`button#${id} > div.grid`).style.right = "auto";
      document.querySelector(`button#${id} > div.grid`).style.left = ".5rem";
    }
  }, [fixAlign]);

  return (
    <div className={styles}>
      {(label || tip) && (
        <span className="flex justify-between items-center">
          {label && (
            <label htmlFor={id} className="block font-semibold mb-2">
              {label}
            </label>
          )}

          {tip && <Tooltip tip={tip} />}
        </span>
      )}

      {!dropDown && !reCAPTCHA && !date && !terms && !biSelect && !radio && (
        <input
          className="w-full rounded-md py-3 px-2 border border-gray-300 bg-transparent"
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          style={{ direction: "rtl" }}
        />
      )}

      {date && <DateInput id={id} name={id} placeholder={placeholder} />}

      {dropDown && (
        <div className="w-full">
          <Select
            size="lg"
            label={placeholder}
            id={id}
            offset={2}
            name={id}
            value={inpVal}
            onChange={(val) => setInpVal(val)}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            {opts.map((opt) => (
              <Option key={opt.name + opt.icon}>
                <div className="flex items-center gap-4">
                  {opt.icon && (
                    <img src={opt.icon} alt={opt.name} className="h-8" />
                  )}
                  <p>{opt.name}</p>
                </div>
              </Option>
            ))}
          </Select>
        </div>
      )}

      {radio && (
        <div className="flex flex-col gap-4">
          {radio.map((rad) => (
            <span key={rad}>
              <input
                className="py-3 px-2 me-4 bg-transparent"
                value={rad}
                onChange={(e) => setInpVal(e.target.value)}
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                maxLength={maxLength}
                style={{ direction: "rtl" }}
              />
              <label htmlFor={rad}>{rad}</label>
            </span>
          ))}
        </div>
      )}

      {biSelect && (
        <fieldset className="grid grid-cols-2">
          <legend className="sr-only">Choose an option</legend>

          {biSelect.map((opt, i) => (
            <div key={opt}>
              <label
                className={`block cursor-pointer border border-gray-100  bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:bg-main has-[:checked]:text-white has-[:checked]:border-main has-[:checked]:ring-1 has-[:checked]:ring-main transition-colors ${
                  i % 2 ? "rounded-e-lg" : "rounded-s-lg"
                }`}
              >
                <p className="text-center fontbold lg:text-lg lg-max:w-max lg-max:mx-auto">
                  {opt}
                </p>

                <input
                  type="radio"
                  name={id}
                  value={opt}
                  id={id}
                  className="sr-only"
                  defaultChecked={i === 0}
                />
              </label>
            </div>
          ))}
        </fieldset>
      )}

      {reCAPTCHA && (
        <span className="block relative w-full rounded-md py-3 px-2 border border-gray-300 bg-transparent">
          <input
            className="ps-28"
            value={inpVal}
            onChange={(e) => setInpVal(e.target.value)}
            type={type}
            name={id}
            id={id}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
          <img
            src="/assets/images/verfication.png"
            alt="recaptcha"
            className="absolute right-1.5 top-1/2 -translate-y-1/2"
          />
        </span>
      )}

      {terms && (
        <label
          htmlFor={id}
          className="flex items-center cursor-pointer lg:items-start gap-4"
        >
          <div className="flex items-center">
            &#8203;
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300 "
              id={id}
              name={id}
            />
          </div>

          <div>
            <strong className="font-medium text-gray-900 text-pretty">
              {terms}
            </strong>
          </div>
        </label>
      )}

      {error && <p className="text-red-500 text-sm h-4">{error[id]}</p>}
    </div>
  );
};
export default CustomInput;
