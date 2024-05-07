import { useLocation, useNavigate } from "react-router-dom";
import PaymentTimer from "./Payment/PaymentTimer";
import PaymentTabs from "./Payment/PaymentTabs";
import PaymentDetails from "./Payment/PaymentDetails";
import PaymentShare from "./Payment/PaymentShare";
import PaymentContacts from "./Payment/PaymentContacts";
import paymentMethods from "../../data/paymentMethods";
import useScrollPos from "../../hooks/useScrollPos";
import { maskPhoneNumber } from "../../utils/helpers";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const scrollPosition = useScrollPos();

  const handlePrev = () => {
    navigate("/checkout?step=3");
  };

  const handlePayment = () => {
    navigate("/payment-gateway");
  };

  return (
    <section className="px-8 space-y-8">
      <div className="lg:grid grid-cols-3 gap-6">
        <div
          className={`col-start-3 col-span-1 ${
            scrollPosition >= 1300 ? "grid" : ""
          }`}
        >
          <PaymentTimer h={state?.hours ?? 1} />
          <div
            className={`hidden lg:block top-24 ${
              scrollPosition > 180 && scrollPosition < 1300
                ? "sticky pt-0.5"
                : ""
            } ${scrollPosition >= 1300 ? "self-end pb-6" : ""}`}
          >
            <PaymentDetails price={state?.total} />
            <PaymentShare />
          </div>
        </div>

        <div className="col-span-2 row-start-1">
          <PaymentTabs
            provider={state?.provider}
            title={state?.title}
            cut={state?.cut}
            tip={state?.tip}
            id={state?.userFormData?.id}
            date={state?.userFormData?.date}
            type={state?.userFormData?.type}
            value={state?.userFormData?.value}
            place={state?.userFormData?.place}
            name={state?.userFormData?.name}
            VehicleInfo={{
              type: state?.userFormData?.["car-type"],
              year: state?.userFormData?.year,
              plate: `${state?.userFormData?.plate_1[2]} ${state?.userFormData?.plate_2[2]} ${state?.userFormData?.plate_3[2]}   ${state?.userFormData?.plate_num}`,
            }}
          />

          <div className="lg:hidden">
            <PaymentDetails price={state?.total} />
            <PaymentShare />
          </div>

          <PaymentContacts
            phone={maskPhoneNumber(state?.userFormData?.phone)}
          />

          <fieldset className="mt-6">
            <legend className="sr-only">terms and conditions Checkbox</legend>

            <div className="space-y-2">
              <label
                htmlFor="Option1"
                className="flex cursor-pointer items-start gap-4"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    id="Option1"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    {" "}
                    هل لديك قسيمة خصم (كوبون)؟{" "}
                  </strong>
                </div>
              </label>
            </div>
          </fieldset>

          <div className="mt-4">
            <form
              className="flex-flex-col px-2 lg:border lg:flex-1"
              onSubmit={handlePayment}
            >
              <h3 className="font-bold pt-2">أختر طريقة الدفع</h3>
              <div className="flex gap-1 mt-1 mb-2">
                {paymentMethods.map((inc, i) => (
                  <div key={inc + i} className="relative border rounded-2xl">
                    <label
                      htmlFor={inc}
                      className="relative grid place-items-center h-full"
                    >
                      <img
                        key={inc + i}
                        src={inc}
                        alt="icon includes"
                        className="w-full"
                      />
                    </label>
                    <input
                      type="radio"
                      name="payment-method"
                      id={inc}
                      className="absolute top-0 right-0 -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </form>
          </div>

          <div className="border rounded-lg border-gray-400 py-4 px-2 mt-6">
            <div className="flex gap-4">
              <input type="radio" name="smart-card" id="smart-card" />
              <label className="font-bold text-gray-700 text-sm">
                تأمينك + الباقة الذكية (526.78 على 4 دفعات)
              </label>
            </div>

            <div className="border border-gray-400 rounded-lg mt-2 relative bg-main/5 lg:flex">
              <img
                src="/assets/images/plus.webp"
                alt="plus icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:rotate-90"
              />

              <div className="lg:flex-1 py-4 flex gap-4 items-center lg-max:border-b-2 lg:border-l-2 border-gray-400">
                <div className="relative h-20 basis-1/4 grid place-items-center px-2 rounded-lg ms-2 bg-white border shadow-xl">
                  <img
                    src="/assets/images/tamara-ar-logo.svg"
                    alt="tamara logo"
                    className="absolute rounded-lg object-cover px-2"
                  />
                </div>

                <div>
                  <h3 className="text-lg/tight font-medium text-gray-900">
                    قسم فاتورتك على 4 دفعات
                  </h3>

                  <p className="mt-0.5 text-gray-700">
                    اشتر الوثيقة الآن وقسّم فاتورتك على 4 دفعات
                  </p>
                </div>
              </div>

              <div className="lg:flex-1 py-4 flex gap-4 items-center">
                <div className="relative h-20 basis-1/4 grid place-items-center px-2 rounded-lg ms-2 bg-white border shadow-xl lg:ms-8">
                  <img
                    src="/assets/images/mid.png"
                    alt="tamara logo"
                    className="absolute rounded-lg object-cover px-2"
                  />
                </div>

                <div>
                  <h3 className="text-lg/tight font-medium text-gray-900">
                    خدمة المساعدة على الطريق
                  </h3>

                  <p className="mt-0.5 text-gray-700">
                    خليك آمن ومرتاح على الطريق!
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-4">
              رسوم الباقة الذكية المدفوعة غير قابلة للاسترداد، يرجى الاطلاع على{" "}
              <strong className="underline">للشروط والأحكام.</strong>
            </p>
          </div>

          <label
            htmlFor="terms-condns"
            className="flex cursor-pointer items-start gap-4 mt-6"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="terms-condns"
              />
            </div>

            <div>
              <p className="font-bold text-gray-900 text-sm">
                أقبل كل ما يلي
                <br /> سيتم حفظ الايبان الخاص بك داخل حسابك أوافق ان تتم إعادة
                توجيهي إلى بوابة خارجية (تمارا) لإكمال المعاملة. وأنني ملزم
                بشروط وأحكام بوابة الطرف الثالث دون أي مسؤولية على تأميني.{" "}
                <br /> اقر بقراءتي وموافقتي على جميع التفاصيل المكتوبة في هذه
                الصفحة <br /> أقبل{" "}
                <span className="text-main">شروط وأحكام</span> تأميني و{" "}
                <span className="text-main">شروط وأحكام</span> شركة التأمين
              </p>
            </div>
          </label>
        </div>
      </div>

      <div className="flex max-lg:flex-col lg:justify-between gap-4">
        <button
          className="max-lg:w-full lg:px-32 lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-gray-200 hover:bg-gray-100 text-gray-800 transition-colors"
          onClick={handlePrev}
        >
          السابق
        </button>

        <button
          className="max-lg:w-full lg:px-32 lg:text-xl capitalize rounded-md font-bold py-3 px-6 bg-[#76b456] hover:brightness-110 text-white transition-colors"
          type="submit"
          onClick={handlePayment}
        >
          ادفع الآن
        </button>
      </div>
    </section>
  );
};
export default PaymentPage;
