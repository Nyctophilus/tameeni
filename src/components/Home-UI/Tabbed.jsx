import { useState } from "react";
import PartyComp from "./PartyComp";

const Tabbed = () => {
  const [activeTab, setActiveTab] = useState("party");
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
      content: <p>mechanical</p>,
      isnew: true,
    },
    {
      name: "vehicle",
      title: "معلومات المركبة من موجز",
      content: <p>vehicle</p>,
      isnew: true,
    },
  ];

  return (
    <>
      <div className="sm:hidden"></div>

      <div className="hidden md:flex flex-col items-center w-fit mx-auto">
        <div className="border-b border-main z-10">
          <nav className="-mb-px flex">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                type="button"
                role="tab"
                className={
                  activeTab === tab.name
                    ? "relative w-[250px] shrink-0 rounded-t-lg border border-main border-b-[#cee9f6] py-3 px-10 text-sm font-medium text-sky-600 bg-white"
                    : "relative w-[250px] shrink-0 border border-b-main rounded-t-lg py-3 px-10 text-sm font-medium text-gray-500 hover:text-gray-700 border-[#dfdfdf] bg-[#f9fafc]"
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
              className="px-4 shadow-lg border rounded-lg border-main bg-white w-[770px] mx-auto -translate-y-[.5px]"
            >
              {tab.content}
            </div>
          ))}
      </div>
    </>
  );
};
export default Tabbed;
