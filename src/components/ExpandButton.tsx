const ExpandButton = ({ expanded, setExpanded }: any) => {
  return (
    <button
      onClick={() => setExpanded(!expanded)}
      className="absolute top-0 -translate-y-3/4 text-xs lg:text-base lg:-translate-y-full left-10 rounded-md py-1 px-4 text-white bg-[#149ade] flex gap-2 items-center shadow-[0px_0px_15px_0px_#a2a3a1bf] hover:bg-[#149bded4]"
    >
      {expanded ? "إغلاق" : "معاينة الكل"}
      <img
        src="/assets/images/chevon.svg"
        alt="chevon icon"
        className={`w-4 transition-transform duration-300 ${
          expanded ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};
export default ExpandButton;
