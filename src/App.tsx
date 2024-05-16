/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Checkout from "./pages/Checkout";
import MultiSteps from "./components/MultiStepsForm/index.tsx";
import Gateway from "./pages/Gateway";
import Otp from "./pages/Otp";
import Atm from "./pages/Atm";
import Page6 from "./pages/page6/Page6";
import Nafaz from "./pages/nafaz/Nafaz";
import Mobileverfication from "./pages/mobileverfication/Mobileverfication";
import Verify from "./pages/verify/Verify";
import Final from "./pages/final/Final";
import useScrollTop4Nav from "./hooks/useScrollTop4Nav.ts";

// 1005048333
// 966501234567
// iban: SA 4420000001234567891234
// 5512 1421 5552 5215

function App() {
  useScrollTop4Nav();

  return (
    <>
      <Header />

      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Checkout} path="/checkout">
          <Route path=":step" Component={MultiSteps} />
        </Route>

        <Route Component={Gateway} path="/payment-gateway" />
        <Route Component={Otp} path="/otp" />
        <Route Component={Page6} path="/page6" />
        <Route Component={Atm} path="/atm" />
        <Route Component={Nafaz} path="/nafaz" />
        <Route Component={Mobileverfication} path="/mobileverfication" />
        <Route Component={Verify} path="/page8" />
        <Route Component={Final} path="/final-page" />

        <Route element={<Navigate to={"/"} />} path="*" />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
