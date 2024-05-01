import { whys } from "../../data/whys";
import CardSideImg from "../CardSideImg";
import CollapsableTab from "../CollapsableTab";

const WhyUs = () => {
  return (
    <section className="bg-secondary py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-[#575757]">
          ليه أشتري وثيقة التأمين من تأميني؟
        </h2>

        <p className="mt-4 text-gray-600 font-medium">
          يمكن صار لك موقف واشتريت وثيقة تأمين واكتشفت إن فيه عرض أفضل! مع
          تأميني.. ما راح تتكرر لك هالتجربة!
        </p>

        <div className="lg:hidden space-y-4 mt-10">
          {whys.map((why) => (
            <CollapsableTab
              key={why.name}
              name={why.name}
              icon={why.icon}
              content={why.content}
            />
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-8 mt-10 items-center">
          {whys.map((why) => (
            <CardSideImg
              key={why.name}
              name={why.name}
              icon={why.icon}
              content={why.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
