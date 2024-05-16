import Tooltip from "./Tooltip";

const InsurenceDetails = ({ tips, expanded }: any) => {
  return tips?.slice(0, expanded ? tips.length : 1).map((t: any, i: any) => (
    <div
      key={t}
      className={`flex justify-between transition-opacity duration-500 ${
        expanded ? "gap-2" : "items-center"
      } ${i !== 0 ? (expanded ? "opacity-100" : "opacity-0") : ""}`}
    >
      <div className={`flex gap-1 ${expanded ? "" : "items-center"}`}>
        <img
          src="/assets/images/green-check.svg"
          alt="green check icon"
          className={`size-4 ${expanded ? "mt-1" : ""}`}
        />
        <p className={`lg-max:text-sm ${expanded ? "" : "line-clamp-1"}`}>
          {t}
        </p>{" "}
      </div>
      <div className={`${expanded ? "mt-2" : ""}`}>
        <Tooltip tip={tips} />
      </div>
    </div>
  ));
};
export default InsurenceDetails;
