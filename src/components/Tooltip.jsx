const Tooltip = ({ tip }) => {
  return (
    <div className="has-tooltip w-6">
      <span className="tooltip rounded shadow-lg py-1 px-4 w-max bg-gray-800 text-sm text-white -mt-8 max-w-[80dvw]">
        {tip}
      </span>
      <img
        src="/assets/images/tooltip.svg"
        alt="tooltip icon"
        className="size-4"
      />
    </div>
  );
};
export default Tooltip;
