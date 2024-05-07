import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const PaymentFlow = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100 h-screen pt-20">
        <div className="bg-white rounded-xl flex flex-col items-center justify-center w-fit max-w-[90dvw] p-4 mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default PaymentFlow;
