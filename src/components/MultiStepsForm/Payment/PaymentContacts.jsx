import { useState } from "react";
import Tooltip from "../../Tooltip";
import InputWithClearIcon from "../../InputWithClearIcon";

const rules = [
  "يبدء بSA",
  "الأحرف الأربعة الأولى عبارة عن أرقام",
  "رمز معرف البنك صحيح",
  "رقم ال IBAN مكتمل",
];

const PaymentContacts = ({ phone }) => {
  const [chooseIbans, setChooseIbans] = useState(false);
  return (
    <div className="border-2 border-gray-300 rounded-xl py-4 mt-6">
      <div className="px-4">
        <h2 className="text-lg font-bold">
          رقم الحساب الدولي الخاص بمالك الوثيقة (الايبان)
        </h2>

        <button
          onClick={() => setChooseIbans(!chooseIbans)}
          className="mt-4 text-gray-700 border rounded-lg px-4 cursor-pointer transition-colors hover:bg-gray-200"
        >
          أختر الايبان من القائمة
        </button>
        <div
          className="rounded-2xl shadow-[0px_0px_50px_-15px_#80808099] mt-5 transition-[height_opacity] duration-700"
          style={{
            height: chooseIbans ? "14.5rem" : "0rem",
            opacity: chooseIbans ? 1 : 0,
          }}
        >
          <h3 className="border-b-2 py-2 ps-4 text-lg font-bold">
            بيانات الايبان
          </h3>
          <fieldset className="space-y-2 px-2 pb-2 overflow-hidden">
            <legend className="sr-only">Delivery</legend>

            <div>
              <label
                htmlFor="DeliveryStandard"
                className="flex cursor-pointer gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-main has-[:checked]:ring-1 has-[:checked]:ring-main"
              >
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryStandard"
                  id="DeliveryStandard"
                  className="size-5 border-gray-300 text-main"
                  defaultChecked
                />
                <div>
                  <p className="text-gray-700">Standard</p>

                  <p className="mt-1 text-gray-900">Free</p>
                </div>
              </label>
            </div>

            <div>
              <label
                htmlFor="DeliveryPriority"
                className="flex cursor-pointer gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-main has-[:checked]:ring-1 has-[:checked]:ring-main"
              >
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryPriority"
                  id="DeliveryPriority"
                  className="size-5 border-gray-300 text-main"
                />
                <div>
                  <p className="text-gray-700">Next Day</p>

                  <p className="mt-1 text-gray-900">£9.99</p>
                </div>
              </label>
            </div>
          </fieldset>
        </div>

        <div className="flex flex-wrap mb-2">
          <p className="font-bold text-gray-700 text-sm">
            أدخل رقم الآيبان الخاص بك
          </p>

          <span className="text-xs text-main ms-auto flex gap-1">
            eg: SA 11 5055 9659 9898 9597 9797
            <Tooltip tip="مثال: SA 11 5055 9659 9898 9597 9797" />
          </span>
        </div>

        <InputWithClearIcon
          type="number"
          id="iban"
          placeholder="2345325e42134134124214"
          reverse={true}
          prefix="SA"
          defaultValue="2345325e42134134124214"
        />

        <div className="mt-2 flex flex-wrap text-green-300 text-xs gap-1">
          {rules.map((rule) => (
            <span key={rule} className="bg-green-50 flex px-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>

              <p>{rule}</p>
            </span>
          ))}
        </div>
      </div>

      <div className="border-t-2 border-gray-300 mt-4 px-4">
        <div className="bg-main/20 rounded-2xl mt-4 py-3 px-4">
          <h2 className="text-lg font-bold text-main">
            رقم الجوال المدخل يجب أن يكون مسجل باسم مالك وثيقة التأمين
          </h2>
          <p className="text-gray-700 font-light">
            بناء على المتطلبات التشريعية و الانظمة المتبعة لحماية خصوصية
            البيانات , رقم الجوال المستخدم يجب أن يكون مسجلا باسم مالك الوثيقة
          </p>
        </div>
        <div className="space-y-4 mt-4">
          {/* <InputWithClearIcon
            label="البريد الالكتروني لمالك الوثيقة"
            type="email"
            id="email"
            placeholder="almestnern@gmail.com"
            defaultValue="almestnern@gmail.com"
          /> */}
          <InputWithClearIcon
            label="رقم جوال مالك الوثيقة"
            type="phone"
            id="phone"
            defaultValue={phone}
            prefix="966+"
            placeholder="ادخل رقم الجوال"
            image="/assets/images/Flag_of_Saudi_Arabia.svg"
          />
        </div>
      </div>
    </div>
  );
};
export default PaymentContacts;
