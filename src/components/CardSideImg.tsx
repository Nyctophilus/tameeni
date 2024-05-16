const CardSideImg = ({ name, icon, content }: any) => {
  return (
    <figure className="flex border bg-white shadow-sm rounded-lg">
      <img src={icon} alt={name} />
      <figcaption className="py-8 pe-6">
        <h2 className="text-2xl font-bold text-right mb-4">{name}</h2>
        {content}
      </figcaption>
    </figure>
  );
};
export default CardSideImg;
