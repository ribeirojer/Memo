import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { RequireAuth } from "./context/RequireAuth";
import "./index.css";
import DashBoard from "./pages/Dashboard";
import Exercices from "./pages/Exercices";
import Experimentar from "./pages/Experimentar";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import SendCard from "./pages/SendCard";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //<React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="experimentar" element={<Experimentar />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <DashBoard />
              </RequireAuth>
            }
          />
          <Route
            path="exercises/:subject"
            element={
              <RequireAuth>
                <Exercices />
              </RequireAuth>
            }
          />
          <Route path="cards" element={<SendCard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  //</React.StrictMode>
);
