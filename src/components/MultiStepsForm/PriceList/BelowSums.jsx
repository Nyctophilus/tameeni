import ExpandButton from "../../ExpandButton";
import Tooltip from "../../Tooltip";
import { Link } from "react-router-dom";

const BelowSums = ({ expanded, setExpanded, cover, userFormData }) => {
  const { sums, total, cut, isMob } = cover;

  return (
    <div className="lg:flex lg:relative lg:bg-gray-100 border-t-2 pb-2">
      {/* sums */}
      <div className="h-14 p-2 bg-gray-100 border-y relative lg:static lg:border-b-0 lg:flex-1">
        <ExpandButton expanded={expanded} setExpanded={setExpanded} />
        {sums.map((sum) => (
          <div key={sum.name} className="flex gap-2 h-full items-center">
            <img
              src="/assets/images/blue-check.svg"
              alt="blue check icon"
              className={`size-4`}
            />
            <p className={`lg-max:text-sm`}>
              {sum.name} <strong className="text-green-300">{sum.plus}</strong>
            </p>
          </div>
        ))}
      </div>

      {/* total */}
      <div className="pt-4 px-2 lg:flex justify-between lg:flex-1 lg:gap-20 lg:border-r-2">
        <div className="lg:grow">
          <strong className="text-[#72ae53] text-2xl lg:text-4xl me-2">
            {total}
          </strong>
          <span className="font-bold text-gray-700">ر.س</span>

          <div className="flex max-w-sm">
            <p className="py-1 flex-1 text-sm bg-main/20 rounded-r-lg px-2">
              (قسمها على 4 دفعات)
            </p>
            <div className="py-1 flex-1 flex items-center justify-between text-sm bg-main/50 rounded-l-lg px-2">
              <p>الباقة الذكية</p>
              <img
                className="h-3"
                src="/assets/images/mid-tamara-sm.webp"
                alt="package"
              />
            </div>
          </div>

          {cut && (
            <div className="lg:flex gap-2 items-center pt-2">
              <p>قيمة التحمل</p>
              <div className="flex gap-2 items-center">
                <p className="text-[#72ae53] font-bold text-lg">{cut} ر.س</p>
                <Tooltip
                  tip={
                    "يتحمل العميل عند أي مطالبة ضد الأضرار اللاحقة بالمركبة المؤمنة مبلغ 1,250.00 ريال سعودي كقيمة تحمل ثابتة"
                  }
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex lg:flex-col mt-4 items-end lg:items-center">
          <p className="text-xs text-gray-700 h-fit lg:mt-2">
            الشروط و الأحكام
          </p>
          <Link
            className="ms-auto capitalize w-52 rounded-md font-bold py-3 px-6 bg-[#76b456] hover:bg-[#76b456]/80 text-white text-center block lg:-order-1"
            type="submit"
            to="/checkout?step=4"
            state={{ ...cover, userFormData }}
          >
            {isMob ? "متاح على الجوال" : "اختيار"}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BelowSums;
