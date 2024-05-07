const DriverInfo = ({ id, name }) => {
  const info = [
    {
      name: "رقم هوية السائق",
      value: id,
    },
    {
      name: "الاسم",
      value: name,
    },
    {
      name: "نسبة القيادة للمركبة",
      value: "100",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col gap-1 mt-4">
      {info.map((inf) => (
        <div className="flex" key={inf.name}>
          <p className="lg-max:flex-1 lg:w-52 font-bold">{inf.name}</p>
          <p className="flex-1 text-sm font-light">{inf.value}</p>
        </div>
      ))}
    </div>
  );
};
export default DriverInfo;
