import { useState } from "react";
import TabsToggler from "./TabsToggler";
import DocDetails from "./DocDetails";
import OwnerInfo from "./OwnerInfo";
import DriverInfo from "./DriverInfo";
import VehicleIno from "./VehicleIno";

const PaymentTabs = ({
  id,
  provider,
  title,
  date,
  type,
  cut,
  tip,
  value,
  place,
  name,
  VehicleInfo,
}: {
  id: string;
  provider: string;
  title: string;
  date: string;
  type: string;
  cut: string;
  tip: string;
  value: string;
  place: string;
  name: string;
  VehicleInfo: any;
}) => {
  const [activeTab, setActiveTab] = useState(3);
  console.log(type);

  return (
    <div>
      <TabsToggler activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="w-full bg-gray-100 shadow-2xl border-t-main border-t-4 rounded-b-3xl">
        {activeTab === 0 && <OwnerInfo id={id} name={name} />}

        {activeTab === 1 && (
          <VehicleIno place={place} VehicleInfo={VehicleInfo} />
        )}

        {activeTab === 2 && <DriverInfo id={id} name={name} />}

        {activeTab === 3 && (
          <DocDetails
            provider={provider}
            title={title}
            date={date}
            cut={cut}
            type={type}
            tip={tip}
            value={value}
            place={place}
          />
        )}
      </div>
    </div>
  );
};
export default PaymentTabs;
