const tabs = [
  {
    name: "معلومات مالك الوثيقة",
    icon: "/assets/images/policyholder-detailicon.svg",
  },
  {
    name: "معلومات المركبة",
    icon: "/assets/images/vehicledetail-icon.svg",
  },
  {
    name: "بيانات السائقين",
    icon: "/assets/images/driverdetail-icon.svg",
  },
  {
    name: "تفاصيل الوثيقة",
    icon: "/assets/images/policydetail-icon.svg",
  },
];

const TabsToggler = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center gap-2 mt-4">
      {tabs.map((tab, index) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(index)}
          className={`flex gap-2 items-center px-4 py-2 rounded-t-xl transition-colors duration-500 shadow-[-2px_-5px_10px_0px_#a2a3a150] ${
            index === activeTab
              ? "bg-main text-white"
              : "bg-white text-gray-700"
          }`}
        >
          <img
            src={tab.icon}
            alt={tab.name + " icon"}
            className="bg-white rounded-full size-8"
          />
          <p className="hidden lg:block text-sm font-bold">{tab.name}</p>
        </button>
      ))}
    </div>
  );
};
export default TabsToggler;
