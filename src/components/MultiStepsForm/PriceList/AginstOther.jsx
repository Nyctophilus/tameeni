import { useState } from "react";
import Tooltip from "../../Tooltip";
import BelowSums from "./BelowSums";
import InsurenceDetails from "../../InsurenceDetails";

const AginstOther = ({ cover, userFormData }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`text-sm bg-white rounded-lg ${
        cover.isFeatured ? "shadow-[0px_0px_20px_#c7dfb6]" : ""
      }`}
    >
      <div
        className={`gap-4 lg:gap-0 flex items-center justify-between py-1 px-2 ${
          cover.isFeatured
            ? "bg-gradient-to-b from-[#ddedd0] to-whiteshadow-[0_10px_25px_10px_#ddedd0] "
            : ""
        }`}
      >
        <div className="lg:hidden">
          <img
            className="w-24 border-gray-300 border-2 scale-x-110"
            src={cover.provider}
            alt={cover.provider + "logo"}
          />
        </div>

        <div className="lg:flex-1">
          <h2 className="font-bold text-lg pe-10">{cover.title}</h2>
        </div>

        <div className="flex lg:flex-1 justify-between">
          <div className="grid place-items-center">
            <div className="flex flex-col justify-center lg:justify-between lg:gap-4 lg:items-center">
              <p className="hidden lg:block bg-gray-300 shadow-lg px-4 rounded-b-md">
                سرعة الربط
              </p>
              <img
                src="/assets/images/star4.webp"
                alt="4 stars"
                className="w-20 scale-110"
              />
            </div>
          </div>

          {cover.qitaf && (
            <div className="hidden lg:block">
              <div className="flex flex-col w-32 text-center ms-auto">
                <p className="w-full bg-[#4f008c] text-white rounded-t-lg border border-[#4f008c]">
                  قطاف
                </p>
                <p className="w-full bg-white rounded-b-lg border border-[#4f008c]">
                  اكسب {cover.qitaf} نقطة
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="lg:hidden p-2 flex justify-between bg-gradient-to-l from-[#149ade] via-[#64a54b] to-[#ddedd2]">
        <p className="text-white font-bold text-base">يغطى سيارتك</p>
        <img
          src="/assets/images/toyota-icon.svg"
          alt="toyota icon"
          className="w-6 grayscale"
        />
      </div>

      <div className="flex flex-col gap-6 lg:gap-0">
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:min-h-40 lg:bg-white">
          <div className="hidden lg:grid place-items-center px-2 border">
            <img
              className="w-24"
              src={cover.provider}
              alt={cover.provider + "logo"}
            />
          </div>

          {/* frees */}
          <div className="flex-flex-col px-2 lg:border lg:flex-1">
            <h3 className="font-bold pt-2">التأمين يشمل (مجاناً)</h3>
            <div className="flex mt-1 mb-2">
              {cover.includes.map((inc, i) => (
                <img
                  key={inc + i}
                  src={inc}
                  alt="icon includes"
                  className="w-10"
                />
              ))}
            </div>

            <InsurenceDetails tips={cover.tip} expanded={expanded} />
            {/* {cover.tip.slice(0, expanded ? cover.tip.length : 1).map((t) => (
              <div
                key={t}
                className={`flex justify-between ${
                  expanded ? "gap-2" : "items-center"
                }`}
              >
                <div className={`flex gap-1 ${expanded ? "" : "items-center"}`}>
                  <img
                    src="/assets/images/green-check.svg"
                    alt="green check icon"
                    className={`size-4 ${expanded ? "mt-1" : ""}`}
                  />
                  <p
                    className={`lg-max:text-sm ${
                      expanded ? "" : "line-clamp-1"
                    }`}
                  >
                    {t}
                  </p>{" "}
                </div>
                <div className={`${expanded ? "mt-2" : ""}`}>
                  <Tooltip tip={cover.tip} />
                </div>
              </div>
            ))} */}
          </div>

          <div className="hidden lg:flex flex-col w-32">
            <p className="text-white font-bold text-center bg-[#76b456]">
              يغطى سيارتك
            </p>
            <div className="bg-[#eaecef] grow grid place-items-center">
              <img
                src="/assets/images/toyota-icon.svg"
                alt="toyota icon"
                className="w-16 grayscale"
              />
            </div>
          </div>

          {/* addtionals */}
          <form className="flex-flex-col px-2 lg:border lg:flex-1">
            <h3 className="font-bold pt-2">تغطيات إضافية</h3>
            <div className="flex gap-1 mt-1 mb-2">
              {cover.addtional.includes.map((inc, i) => (
                <label
                  htmlFor={inc}
                  key={inc + i}
                  className="relative grid place-items-center"
                >
                  {cover.addtional?.tip && (
                    <input
                      className="absolute top-0 right-0"
                      type="checkbox"
                      name="addtional"
                      id={inc}
                    />
                  )}

                  <img
                    key={inc + i}
                    src={inc}
                    alt="icon includes"
                    className="max-w-14"
                  />
                </label>
              ))}
            </div>

            {cover.addtional?.tip &&
              cover.addtional?.tip
                .slice(0, expanded ? cover.addtional?.tip.length : 1)
                .map((t) => (
                  <div key={t.name} className="flex gap-2 items-center mt-4">
                    <div className="flex gap-1 items-center">
                      <input type="checkbox" name="addtional" id="addtional" />
                      <p
                        className={`lg-max:text-sm ${
                          expanded ? "" : "line-clamp-1"
                        }`}
                      >
                        {t.name}{" "}
                        <strong className="text-green-300">{t.plus}</strong>
                      </p>
                    </div>
                    <div>
                      <Tooltip tip={t.name} />
                    </div>
                  </div>
                ))}
          </form>
        </div>

        <BelowSums
          expanded={expanded}
          setExpanded={setExpanded}
          cover={cover}
          userFormData={userFormData}
        />
      </div>
    </div>
  );
};
export default AginstOther;
