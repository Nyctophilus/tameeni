import PartyComp from "./PartyComp";
import MechTab from "./MechTab";
import VehicleTab from "./VehicleTab";
import { useSearchParams } from "react-router-dom";

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
    icon: "/assets/images/mbi-logo.svg",
  },
  {
    name: "vehicle",
    title: "معلومات المركبة من موجز",
    content: <VehicleTab />,
    isnew: true,
    icon: "/assets/images/mojaz-logo.webp",
  },
];

const Tabbed = () => {
  // const [activeTab, setActiveTab] = useState<string>("party");
  // const handleChange = (name: string, target: any) => {
  //   document.querySelectorAll("details.group").forEach((element: any) => {
  //     element.open = false;
  //   });

  //   setActiveTab(name);
  //   target.open = true;
  // };
  // useEffect(() => {
  //   document.querySelector<any>("details.group").open = true;
  // }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("activeTab");

  return (
    <>
      <div className="md:hidden">
        <div className="space-y-4">
          {tabs.map((tab) => (
            <div key={tab.name} className="relative">
              {tab.isnew && (
                <img
                  src="/assets/images/new-badge.png"
                  alt="new badge"
                  className="absolute rotate-90 right-0 top-0 w-10"
                />
              )}

              <details
                className="group rounded-lg bg-white border p-4 [&_summary::-webkit-details-marker]:hidden"
                open={!activeTab && tab.name === "party" ? true : false}
              >
                <summary
                  className="flex cursor-pointer items-center gap-4 text-gray-900"
                  onClick={() => {
                    document
                      .querySelectorAll("details.group")
                      .forEach((element: any) => {
                        element.open = false;
                      });
                    setSearchParams({ activeTab: tab.name }, { replace: true });
                  }}
                >
                  <span className="relative shrink-0 size-10 bg-main/20 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute size-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 inset-0 opacity-100 group-open:opacity-0"
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
                      className="absolute size-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 inset-0 opacity-0 group-open:opacity-100"
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

                  {tab.icon && (
                    <img
                      src={tab.icon}
                      alt={tab.name}
                      className="lg:hidden size-10 ms-auto"
                    />
                  )}
                </summary>

                {tab.content}
              </details>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`hidden md:flex flex-col items-center mx-auto w-[80dvw] ${
          !activeTab || activeTab === "party" ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        <div className="border-b border-main z-10 w-[95%]">
          <nav className="-mb-px flex justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                type="button"
                role="tab"
                className={
                  (!activeTab && tab.name === "party") || activeTab === tab.name
                    ? "relative w-[250px] shrink-1 rounded-t-lg border border-main border-b-[#cee9f6] py-3 px-10 bg-white"
                    : "relative w-[250px] shrink-1 border border-b-main rounded-t-lg py-3 px-10 hover:text-gray-700 border-[#dfdfdf] bg-[#f9fafc]"
                }
                onClick={() =>
                  setSearchParams({ activeTab: tab.name }, { replace: true })
                }
              >
                {tab.isnew && (
                  <img
                    src="/assets/images/new-badge.png"
                    alt="new badge"
                    className="absolute right-0 rotate-90 top-0 w-10"
                  />
                )}
                <p
                  className={`font-bold w-max text-sm ${
                    (!activeTab && tab.name === "party") ||
                    activeTab === tab.name
                      ? "text-main"
                      : "text-gray-700"
                  }`}
                >
                  {tab.title}
                </p>
              </button>
            ))}
          </nav>
        </div>
        {tabs
          .filter((tab) =>
            !activeTab && tab.name === "party" ? true : tab.name === activeTab
          )
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
