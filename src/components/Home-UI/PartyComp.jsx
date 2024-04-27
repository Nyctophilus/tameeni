const PartyComp = () => {
  return (
    <>
      <h1 className="py-4 text-xl font-bold">
        اشتر تأمين ضد الغير/شامل في دقائق
      </h1>

      <form>
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

        <button className="capitalize w-full my-6 rounded-md py-2 bg-green-600 text-white">
          اشتر الآن
        </button>
      </form>
    </>
  );
};
export default PartyComp;
