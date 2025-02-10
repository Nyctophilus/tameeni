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

const routes = [
  { path: "payment-gateway", page: Gateway },
  { path: "otp", page: Otp },
  { path: "atm", page: Atm },
  { path: "phone-popup", page: PhonePopup },
  { path: "verify-nafaz", page: VerifyNafaz },
];

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

      {routes.map(
        (route) => (
          // permissions.value.includes(route.path) && (
          <Route
            key={route.path}
            path={`/${route.path}`}
            Component={route.page}
          />
        )
        // )
      )}

      <Route element={<Navigate to={"/"} />} path="*" />
    </Routes>
  );
}

export default Router;
