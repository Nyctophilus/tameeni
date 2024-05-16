import { useState } from "react";
import InsurenceDetails from "../../../InsurenceDetails";
import ExpandButton from "../../../ExpandButton";

const DocDetails = ({
  provider,
  title,
  tip,
  type,
  cut,
  date,
  value,
  place,
}: {
  provider: string;
  title: string;
  tip: string;
  type: string;
  cut: string;
  date: string;
  value: string;
  place: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const info = [
    {
      name: "تاريخ بدء الوثيقة",
      value: date,
    },
    {
      name: "نوع التأمين",
      value: type,
    },
    {
      name: "الإصلاح في",
      value: place,
    },
    {
      name: "حد الخساره الكليه",
      value: "50%",
    },
    {
      name: "تاريخ انتهاء الوثيقة",
      value: "06/05/2025",
    },
    {
      name: "قيمة التحمل",
      value: cut || "لا يوجد قيمة تحمل",
    },
    {
      name: "قيمة المركبة التقديرية",
      value: value,
      isFeatured: true,
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-3xl p-4">
        <div className="grid place-items-center w-full border-b-2">
          <img src={provider} alt={title} className="h-32" />
        </div>
        <div className="relative pt-6">
          <ExpandButton expanded={expanded} setExpanded={setExpanded} />

          <InsurenceDetails tips={tip} expanded={expanded} />
        </div>
      </div>

      <div className="bg-white rounded-3xl p-4 flex flex-col gap-1">
        {info.map((inf) => (
          <div key={inf.name} className="flex text-sm">
            <h4 className="flex-1 font-bold">{inf.name}</h4>
            <div className="flex-1">
              <p
                className={`ms-2 w-fit ${
                  inf.isFeatured
                    ? "text-white bg-[#76b740] px-2 rounded-md"
                    : ""
                }`}
              >
                {inf.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DocDetails;
