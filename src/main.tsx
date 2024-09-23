import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CustomRouter } from "./components/CustomRouter.tsx";
import "./index.css";
import { UserStatusProvider } from "./context/userStatus.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CustomRouter>
    <UserStatusProvider>
      <App />
    </UserStatusProvider>
  </CustomRouter>
);
