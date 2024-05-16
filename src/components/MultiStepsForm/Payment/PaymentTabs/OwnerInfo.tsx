const OwnerInfo = ({ id, name }: { id: string; name: string }) => {
  const info = [
    {
      name: "هوية مالك الوثيقة",
      value: id,
    },
    {
      name: "الاسم",
      value: name,
    },
    {
      name: "العنوان الوطني",
      value: "نجران",
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
export default OwnerInfo;
