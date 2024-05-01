import { useRef, useState } from "react";
import PartyComp from "./PartyComp";
import MechTab from "./MechTab";
import VehicleTab from "./VehicleTab";

const Tabbed = () => {
  const [activeTab, setActiveTab] = useState("party");
  const de = useRef(null);
  const tabs = [
    {
      name: "party",
      title: "تأمين ضد الغير & شامل",
      content: <PartyComp />,
      isnew: false,
    },
    {
      name: "mechanical",
      title: "تأمين الأعطال الميكانيكية",
      content: <MechTab />,
      isnew: true,
    },
    {
      name: "vehicle",
      title: "معلومات المركبة من موجز",
      content: <VehicleTab />,
      isnew: true,
    },
  ];

  const handleChange = (name, target) => {
    setActiveTab(name);

    if (activeTab === name) {
      target.open = true;
    } else {
      target.open = false;
    }
    return name;
  };

  return (
    <>
      <div className="md:hidden">
        <div className="space-y-4">
          {tabs.map((tab) => (
            <div key={tab.name} className="relative">
              {tab.isnew && (
                <img
                  src="/new-badge.png"
                  alt="new badge"
                  className="absolute rotate-90 right-0 top-0 w-10"
                />
              )}

              <details
                ref={de}
                className="group rounded-lg bg-white border p-6 [&_summary::-webkit-details-marker]:hidden"
                onClick={(e) => handleChange(tab.name, e.target)}
              >
                <summary className="flex cursor-pointer items-center gap-4 text-gray-900">
                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>

                  <h2
                    className={`font-medium ${
                      tab.name === activeTab ? "text-main" : ""
                    }`}
                  >
                    {tab.title}
                  </h2>
                </summary>

                {tab.content}
              </details>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center mx-auto w-[80dvw] max-w-[1200px]">
        <div className="border-b border-main z-10 w-[95%]">
          <nav className="-mb-px flex justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                type="button"
                role="tab"
                className={
                  activeTab === tab.name
                    ? "relative w-[250px] shrink-1 rounded-t-lg border border-main border-b-[#cee9f6] py-3 px-10 text-sm font-medium text-sky-600 bg-white"
                    : "relative w-[250px] shrink-1 border border-b-main rounded-t-lg py-3 px-10 text-sm font-medium text-gray-500 hover:text-gray-700 border-[#dfdfdf] bg-[#f9fafc]"
                }
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.isnew && (
                  <img
                    src="/new-badge.png"
                    alt="new badge"
                    className="absolute left-0 top-0 w-10"
                  />
                )}
                {tab.title}
              </button>
            ))}
          </nav>
        </div>
        {tabs
          .filter((tab) => tab.name === activeTab)
          .map((tab) => (
            <div
              key={tab.name}
              className="w-full transition-[width] px-4 shadow-lg border rounded-lg border-main bg-white mx-auto -translate-y-[.5px] pb-5"
            >
              {tab.content}
            </div>
          ))}
      </div>
    </>
  );
};
export default Tabbed;
