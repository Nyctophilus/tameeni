import { useLocation, useNavigate } from "react-router-dom";
import types from "../../data/types";
import styles from "../hero.module.css";
import { useState } from "react";
import AginstOther from "./PriceList/AginstOther";
import covers from "../../data/covers";
import DropdownInput from "../DropdownInput";
import Modal from "../Modal";

const options = [
  { name: "من الأعلى للأقل", icon: "/assets/images/desanding.svg" },
  { name: "من الأقل للأعلى", icon: "/assets/images/ascending.svg" },
];

const StepThree = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();

  const HandlePrev = () => {
    navigate("/checkout/2", state);
  };
  console.log(state);

  const ownerInfo = [
    {
      name: "تاريخ بدء الوثيقة",
      value: state?.date,
    },
    {
      name: "هوية مالك الوثيقة",
      value: state?.id,
    },
    {
      name: "الاسم",
      value: state?.name,
    },
    // {
    //   name: "العنوان الوطني",
    //   value: "نجران",
    // },
    {
      name: "ماركة المركبة",
      value: state?.["car-type"],
    },
    // {
    //   name: "موديل المركبة",
    //   value: "افالون",
    // },
    {
      name: "سنة الصنع",
      value: state?.year,
    },
    {
      name: "رقم اللوحة",
      value: `${state?.plate_1} ${state?.plate_2} ${state?.plate_3} ${state?.plate_num}`,
    },
    {
      name: "الرقم التسلسلي",
      value: state?.serial,
    },
    // {
    //   name: "اللون",
    //   value: "ابيض",
    // },
    {
      name: "قراءة العداد",
      value: state?.meter,
    },
    {
      name: "قيمة المركبة التقديرية",
      value: `${state?.value} ر.س`,
    },
    {
      name: "الإصلاح في	الورشات المعتمدة",
      value: state?.place,
    },
  ];

  return (
    <section>
      {showModal && <Modal setShowModal={setShowModal} info={ownerInfo} />}
      <div className="flex lg-max:flex-col">
        <ul
          className={`${styles.insurance_tabs} basis-3/4 mx-auto flex gap-2 justify-center w-full px-4`}
        >
          {types.map((link, index) => (
            <button
              onClick={() => setActiveTab(index)}
              key={link.name}
              className="flex-1"
            >
              <div
                className={`${styles.insurance_tabs_item_link} ${
                  index === activeTab
                    ? styles.insurance_tabs_item_link__active
                    : ""
                } lg-max:px-0`}
              >
                <p className="text-sm md:text-xl">{link.name}</p>
                {link.p && <p className="text-xs md:text-md">{link.p}</p>}
              </div>
            </button>
          ))}
        </ul>

        <div className="p-2.5 lg:ps-0 lg-max:bg-main lg-max:w-full lg:basis-1/4 flex justify-between items-center lg:flex-row-reverse">
          <DropdownInput
            selected={selectedOrder}
            setSelected={setSelectedOrder}
            options={options}
            filter
          />
          <button className="cursor-pointer" onClick={() => setShowModal(true)}>
            <img
              src="/assets/images/details.svg"
              alt="details icon"
              className="bg-white scale-75 rounded-lg px-1 py-0.5 lg:hidden"
            />
            <p className="hidden lg:block text-sm font-bold text-gray-700 bg-white rounded-lg py-1 px-2 border shadow-md">
              معلومات المالك الوثيقة و الملكية
            </p>
          </button>
        </div>
      </div>

      <div
        className={`bg-gray-200 min-h-80 shadow-2xl lg:border-t-4 border-main pt-4 lg:py-4 px-1 lg:px-4 flex gap-6 ${
          selectedOrder === 0 ? "flex-col " : "flex-col-reverse"
        }`}
      >
        {covers[activeTab].map((cover: any) => (
          <AginstOther key={cover.title} cover={cover} userFormData={state} />
        ))}
      </div>

      <div className="relative border-t-2 border-gray-300 px-4 mt-20 pt-4">
        <p className="absolute top-0 -translate-y-full left-10 text-xs">
          شامل جميع الرسوم والضراثب و 2.00% عمولة الوسيط
        </p>
        <button
          className="capitalize w-52 rounded-md font-bold py-3 px-6 bg-gray-200 hover:bg-gray-100 text-gray-800 transition-colors"
          onClick={HandlePrev}
        >
          السابق
        </button>
      </div>
    </section>
  );
};
export default StepThree;
