const Impacts = () => {
  const boxs = [
    {
      name: "السجل التأميني",
      icon: "/impacts/affects-icon1.webp",
    },
    {
      name: "عمر السائق",
      icon: "/impacts/affects-icon2.png",
    },
    {
      name: "نوع السيارة",
      icon: "/impacts/affects-icon3.webp",
    },
    {
      name: "مدينة القيادة",
      icon: "/impacts/affects-icon4.webp",
    },
    {
      name: "الغرض من استخدام السيارة",
      icon: "/impacts/affects-icon5.webp",
    },
  ];

  return (
    <section className="bg-secondary py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-[#575757]">
          إيش اللي يأثر على سعر وثيقة تأمين للسيارات؟
        </h2>

        <p className="mt-4 text-gray-600 font-medium">
          كل شركة تأمين لها طريقتها وآليتها الخاصة في تسعير وثائق التأمين. لذلك
          هناك عوامل كثيرة تستخدمها شركات التأمين والتي تؤثر بدورها على سعر
          تأمين السيارة ومنها:
        </p>

        <div className="flex gap-4 justify-center mt-10 flex-wrap">
          {boxs.map((box) => (
            <div
              key={box.name}
              className="max-md:basis-[45%] w-60 p-4 border-2 rounded-md flex flex-col items-center gap-4"
            >
              <img
                src={box.icon}
                alt={box.name}
                title={box.name}
                className="w-24 h-24 max-w-full"
              />
              <p className="text-gray-600 font-bold">{box.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Impacts;
