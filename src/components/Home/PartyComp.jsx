import { useState } from "react";
import { handleSubmitTab } from "../../utils/actions";
import { useNavigate } from "react-router-dom";
import CustomInput from "../CustomInput";

const PartyComp = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const res = handleSubmitTab(e, setError);
    console.log(error);
    console.log(res);

    res && navigate(`/checkout?step=1`, { state: res });
  };

  return (
    <>
      <h1 className="py-4 text-xl font-bold">
        اشتر تأمين ضد الغير/شامل في دقائق
      </h1>

      <form onSubmit={handleSubmit}>
        <CustomInput
          error={error}
          setError={setError}
          label="رقم الهوية أو الإقامة"
          placeholder="رقم الهوية أو الإقامة"
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
