import { useState } from "react";
import { handleSubmitTab } from "../../utils/actions";

const PartyComp = () => {
  const [error, setError] = useState({});

  return (
    <>
      <h1 className="py-4 text-xl font-bold">
        اشتر تأمين ضد الغير/شامل في دقائق
      </h1>

      <form onSubmit={(e) => handleSubmitTab(e, null, setError, error)}>
        <label htmlFor="id" className="block font-semibold mb-2">
          رقم الهوية
        </label>
        <input
          className="w-full rounded-md py-3 px-2 border border-gray-300 bg-transparent"
          type="number"
          name="id"
          id="id"
          placeholder="رقم الهوية الوطنية أو الإقامة أو الشركة"
        />

        <button
          className="capitalize w-52 my-6 rounded-md font-bold py-3 px-6 bg-[#76b456] hover:bg-[#76b456]/90 text-white"
          type="submit"
        >
          اشتر الآن
        </button>
      </form>
    </>
  );
};
export default PartyComp;
