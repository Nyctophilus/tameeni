import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Gateway from "./pages/Gateway";
import PaymentFlow from "./pages/PaymentFlow";
import OTP from "./pages/OTP";
import SecretCode from "./pages/SecretCode";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/payment-gateway",
      element: <PaymentFlow />,
      children: [
        {
          path: "/payment-gateway",
          element: <Gateway />,
        },
        {
          path: "/payment-gateway/otp",
          element: <OTP />,
        },
        {
          path: "/payment-gateway/secret-code",
          element: <SecretCode />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
