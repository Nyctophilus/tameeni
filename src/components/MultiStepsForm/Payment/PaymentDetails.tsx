const PaymentDetails = ({ price }: { price: string }) => {
  const sub1 = [
    {
      name: "السعر الوثيقة",
      price: price,
      feat: true,
    },
    {
      name: "شامل كل ما بعد",
      price: "",
    },
    {
      name: "خصم عدم وجود مطالبات",
      price: "1.154.00",
      feat: true,
    },
    {
      name: "خصم يوم التأسيس",
      price: "0.00",
      feat: true,
    },
  ];

  const partials = [
    {
      name: "المجموع الجزئي",
      price: "1.732.29",
      feat: true,
    },
    {
      name: "ضريبة القيمة المضافة (15.00%)",
      price: "259.84",
      feat: true,
    },
  ];
  return (
    <div className="relative px-2 pb-5 bg-gradient-to-b from-main/20 to-white border-main border border-b-0 mt-6">
      <h2 className="text-main font-bold py-2 border border-transparent border-b-main">
        التفاصيل
      </h2>

      <div className="py-2 border-b">
        {sub1.map((sub) => (
          <div key={sub.name} className="text-sm flex justify-between">
            <p className={`${sub.feat ? "font-semibold" : ""}`}>{sub.name}</p>
            <p className="">{sub.price}</p>
          </div>
        ))}
      </div>

      <div className="py-2 border-b">
        {partials.map((sub) => (
          <div key={sub.name} className="text-sm flex justify-between">
            <p className={`${sub.feat ? "font-semibold" : ""}`}>{sub.name}</p>
            <p className="">{sub.price}</p>
          </div>
        ))}
      </div>

      <div className="pt-4 flex justify-between">
        <p className="font-semibold">المبلغ الإجمالي</p>
        <p>
          <strong className="text-main">{price}</strong> ر.س
        </p>
      </div>
      <p className="text-xs mt-2">
        شامل جميع الضرائب و الرسوم و 4.00% عمولة الوسيط
      </p>

      <img
        src="/assets/images/recipt-bottom.svg"
        alt="bg-bottom image"
        className="absolute w-full scale-x-[1.09] bottom-0 translate-y-[60%] left-1/2 -translate-x-1/2"
      />
    </div>
  );
};
export default PaymentDetails;
