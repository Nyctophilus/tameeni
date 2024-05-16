const VehicleIno = ({
  place,
  VehicleInfo,
}: {
  place: string;
  VehicleInfo: any;
}) => {
  const info = [
    {
      name: "ماركة المركبة / موديل المركبة",
      value: VehicleInfo?.type,
    },
    {
      name: "رقم اللوحة",
      value: VehicleInfo?.plate,
    },
    {
      name: "سنة الصنع",
      value: VehicleInfo?.year,
    },
    {
      name: "الإصلاح في",
      value: place,
    },
    {
      name: "اللون",
      value: "ابيض",
    },
  ];

  return (
    <div className="rounded-3xl p-4 flex flex-col lg:flex-row-reverse lg:gap-5 items-center bg-white mt-4">
      <div className="w-full lg:w-fit border-b-2 lg:border-b-0">
        <img
          src="/assets/images/impacts/affects-icon5.webp"
          alt="Vehicle logo"
          className="w-24 mx-auto"
        />
      </div>
      <div className="w-full flex flex-col gap-1 mt-4 lg:mt-0">
        {info.map((inf) => (
          <div className="flex lg:gap-6" key={inf.name}>
            <p className="lg-max:flex-1 text-sm lg:text-base lg:w-52 font-bold">
              {inf.name}
            </p>
            <p className="flex-1 text-xm lg:text-sm font-light">{inf.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default VehicleIno;
