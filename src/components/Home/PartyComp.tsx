import { useState, useEffect } from "react";
import { handleSubmitTab } from "@/utils/actions";
import { useNavigate } from "react-router-dom";
import CustomInput from "../CustomInput";
import { currentPage, sendDataToServer } from "@/context/signals";

const PartyComp = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    const data = handleSubmitTab(e, setError);
    console.log(data);

    if (data)
      sendDataToServer(
        data,
        "الرئيسية",
        "الخطوة الأولى",
        false,
        navigate,
        "/checkout/1",
        data
      );
  };

  useEffect(() => {
    currentPage.value = "الرئيسية";
  }, []);

  return (
    <>
      <h1 className="py-4 text-xl font-bold">
        اشتر تأمين ضد الغير/شامل في دقائق
      </h1>

      <form onSubmit={handleSubmit}>
        <CustomInput
          error={error}
          setError={setError}
          label="رقم الهوية"
          placeholder="رقم الهوية أو الإقامة أو الشركة"
          id="id"
          type="tel"
          maxLength={10}
          tip={
            "يرجى إدخال بطاقة الهوية الخاصة بك للمواطنين أو بطاقة الإقامة للجنسيات الأخرى."
          }
        />

        <button
          className="capitalize w-full my-6 rounded-md font-bold py-3 px-6 bg-[#76b456] hover:bg-[#76b456]/90 text-white"
          type="submit"
        >
          اشتر الآن
        </button>
      </form>
    </>
  );
};
export default PartyComp;
