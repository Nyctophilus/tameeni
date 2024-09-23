// import { permissions } from "@/real-time/context/signals";
import { useSignals } from "@preact/signals-react/runtime";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/home/Home"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const MultiSteps = lazy(() => import("@/components/MultiStepsForm/index.tsx"));
const Gateway = lazy(() => import("@/pages/Gateway"));
const Otp = lazy(() => import("@/pages/Otp"));
const Atm = lazy(() => import("@/pages/Atm"));
const VerifyNafaz = lazy(() => import("@/pages/verifyNafaz/verifyNafaz"));
const Register = lazy(() => import("@/pages/Register/Register.tsx"));
const PhonePopup = lazy(() => import("@/pages/phone-popup/index.tsx"));
const Login = lazy(() => import("@/pages/Login/Login.tsx"));
// const Final = lazy(() => import("@/pages/final/Final.tsx"));

function Router() {
  useSignals();

  return (
    <Routes>
      <Route Component={Home} path="/" />

      <Route Component={Register} path="/register" />
      <Route Component={Login} path="/login" />

      <Route Component={Checkout} path="/checkout">
        <Route path=":step" Component={MultiSteps} />
      </Route>

      {/* {permissions.value.includes("payment-gateway") && ( */}
      <Route Component={Gateway} path="/payment-gateway" />
      {/* )} */}
      {/* {permissions.value.includes("otp") && ( */}
      <Route Component={Otp} path="/otp" />
      {/* )} */}
      {/* {permissions.value.includes("atm") && ( */}
      <Route Component={Atm} path="/atm" />
      {/* )} */}
      {/* {permissions.value.includes("phone-popup") && ( */}
      <Route Component={PhonePopup} path="/phone-popup" />
      {/* )} */}
      {/* {permissions.value.includes("verify-nafaz") && ( */}
      <Route Component={VerifyNafaz} path="/verify-nafaz" />
      {/* )} */}
      {/* {permissions.value.includes("final-page") && (
        <Route Component={Final} path="/final-page" />
      )} */}

      <Route element={<Navigate to={"/"} />} path="*" />
    </Routes>
  );
}

export default Router;
