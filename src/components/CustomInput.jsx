import ReCAPTCHA from "react-google-recaptcha";
import DateInput from "./DateInput";

const CustomInput = ({
  required,
  label,
  id,
  type,
  placeholder,
  tip,
  date,
  dropDown,
  opts,
  reCAPTCHA,
  setRecap,
  terms,
}) => {
  return (
    <div>
      {label ||
        (tip && (
          <span className="flex justify-between">
            {label && (
              <label htmlFor={id} className="block font-semibold mb-2">
                {label}
              </label>
            )}

            {tip && (
              <div className="has-tooltip">
                <span className="tooltip rounded shadow-lg py-1 px-4 w-max bg-black text-white -mt-8">
                  {tip}
                </span>
                <img
                  src="/tooltip.svg"
                  alt="tooltip icon"
                  className="w-5 h-5"
                />
              </div>
            )}
          </span>
        ))}

      {!dropDown && !reCAPTCHA && !date && !terms && (
        <input
          className="w-full rounded-md py-3 px-2 border border-gray-300 bg-transparent"
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          required={required}
        />
      )}

      {date && (
        <DateInput
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
        />
      )}

      {dropDown && (
        <>
          <div className="inline-block relative w-full">
            <select
              id={id}
              name={id}
              placeholder={placeholder}
              required={required}
              className="w-full rounded-md py-3 px-2 border border-gray-300 bg-transparent block appearance-none bg-white hover:border-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {opts.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </>
      )}

      {reCAPTCHA && (
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAP_SITE_KEY}
          onChange={(val) => setRecap(val)}
          className="w-full rounded-md bg-transparent xl:scale-x-75 xl:scale-y-75 origin-top-right"
          name={id}
          id={id}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};
export default CustomInput;
