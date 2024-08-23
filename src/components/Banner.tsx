import { X } from "lucide-react";
import { useState } from "react";


export default function CollapsibleBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div
        // replace `absolute` with `fixed` if you want the banner to be fixed on the page Also Animation will not work if you use `absolute`
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex w-full items-center gap-x-6 bg-red-500 px-6 py-3 sm:px-3.5 sm:before:flex-1">
          <div className="flex flex-col items-center text-sm font-medium leading-6 text-white">
            <p>
              NOTE: This site is a clone website. It is not the real, official
              site. Its purpose is to look like the official site for portfolio
              purposes. This site is not for active use. Do NOT enter your
              credentials or share any personal information
            </p>
            <p>
              All forms' fields validation is disabled (for security reasons) to
              prevent unaware users to share personal information or connect
              external wallets / applications.
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Dismiss"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
      {isVisible && <div className="h-[52px]" />}
    </>
  );
}
