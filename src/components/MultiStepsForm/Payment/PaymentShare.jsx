const PaymentShare = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl relative p-4 mt-10 border border-main">
      <div className="bg-main rounded-full p-3 absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4">
        <img
          src="/assets/images/share-icon-white.svg"
          alt="share icon"
          className="size-8"
        />
      </div>
      <h2 className="text-lg font-bold">شارك التسعيرة</h2>
      <p className="text-sm">
        يمكنك مشاركة التسعيرة و الدفع لاحقا عن طريق الرابط التالي:
      </p>
      <p className="text-main/90 text-sm">
        https://tameeni.com/Al/SQ?7eC89fQ3tSDx
      </p>

      <div className="mt-4 flex gap-1">
        <button className="flex gap-2 items-center px-3 py-1 rounded-3xl border shadow-lg hover:bg-gray-100">
          <p className="text-sm font-bold">شارك التسعيرة</p>
          <img
            src="/assets/images/share-icon-white.svg"
            alt="share icon"
            className="size-5"
            style={{
              filter:
                "invert(50%) sepia(10%) saturate(2410%) hue-rotate(110deg) brightness(91%) contrast(83%)",
            }}
          />
        </button>
        <button className="flex gap-2 items-center px-3 py-1 rounded-3xl border shadow-lg hover:bg-gray-100">
          <p className="text-sm font-bold">انسخ الرابط</p>
          <img
            src="/assets/images/copyicon.svg"
            alt="share icon"
            className="size-5"
            style={{
              filter:
                "invert(50%) sepia(10%) saturate(2410%) hue-rotate(110deg) brightness(91%) contrast(83%)",
            }}
          />
        </button>
      </div>
    </div>
  );
};
export default PaymentShare;
