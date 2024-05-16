// import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import DateInput from "./DateInput";
import Tooltip from "./Tooltip";
import { validateLanguage, validateSAID } from "../utils/helpers";
import { Option, Select } from "@material-tailwind/react";
import years from "../data/years";
import errMsgs from "../data/errorMessages";
import { rtl_Select } from "../constants/data";

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
  yearsDD,
  reCAPTCHA,
  terms,
  biSelect,
  radio,
  hidValue,
}: any) => {
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
          ...error,
          recap: inpVal === "8610" ? null : errMsgs.recap,
        });
      } else if (id === "serial") {
        return setError({
          ...error,
          serial: inpVal.length <= 8 ? errMsgs.serial : null,
        });
      } else if (id === "phone") {
        const saRegex = /^(?:\+?966|0)(?:\d{9})$/;

        return setError({
          ...error,
          phone: !saRegex.test(inpVal) ? errMsgs.phone : null,
        });
      } else if (id === "name") {
        const lang = validateLanguage(inpVal);
        return setError({
          ...error,
          name: lang !== "ar" ? errMsgs.name : null,
        });
      } else {
        return setError({
          ...error,
          [id]: !inpVal && inpVal !== null ? errMsgs[id] : null,
        });
      }
    }
  }, [inpVal]);

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
      {hidValue && <input type="hidden" name={id} id={id} value={inpVal} />}

      {!dropDown &&
        !reCAPTCHA &&
        !date &&
        !terms &&
        !biSelect &&
        !radio &&
        !yearsDD && (
          <input
            className="w-full rounded-md py-3 px-2 border bg-transparent focus-within:outline-main/30"
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
            label={placeholder}
            className={rtl_Select}
            onChange={(val) => setInpVal(val)}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {opts.map((opt: any) => (
              <Option key={opt.name + opt.icon} value={opt.name}>
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

      {yearsDD && (
        <Select
          className={`w-full rounded-md py-3 px-2 border bg-transparent focus-within:outline-main/30 ${rtl_Select}`}
          label={placeholder}
          defaultValue={inpVal}
          id={id}
          name={id}
          onChange={(val) => setInpVal(val)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {years.map((opt) => (
            <Option key={opt} value={`${opt}`}>
              {opt}
            </Option>
          ))}
        </Select>
      )}

      {radio && (
        <div className="flex flex-col gap-4">
          {radio.map((rad: any) => (
            <span key={rad}>
              <input
                className="py-3 px-2 me-4 bg-transparent focus-within:outline-main/30"
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

          {biSelect.map((opt: any, i: any) => (
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
        <span className="flex items-center cursor-pointer lg:items-start gap-4">
          <div className="flex items-center">
            &#8203;
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300 "
              id={id}
              name={id}
              required
            />
          </div>

          <div>
            <strong className="font-medium text-gray-900 text-pretty">
              {terms}
            </strong>
          </div>
        </span>
      )}

      {!terms && error && (
        <p className="text-red-500 text-sm h-4">{error[id]}</p>
      )}
    </div>
  );
};
export default CustomInput;
