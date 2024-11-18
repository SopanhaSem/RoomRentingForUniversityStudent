import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import MainComponent from "./pages/maincomponent.jsx";
import SignUpForm from "./components/auth/SignUpForm.jsx";
import Signinform from "./components/auth/signinform.jsx";
import VerifyOtp from "./components/auth/VerifyOtp.jsx";
import MainLayout from "./components/dashboard/MainLayout.jsx";
import Home from "./components/dashboard/dashboardmenu/Home.jsx";
import MonthlyReport from "./components/dashboard/dashboardmenu/MonthlyReport.jsx";
import RoomManagement from "./components/dashboard/dashboardmenu/RoomManagement.jsx";
import ProfileTab from "./components/dashboard/dashboardmenu/ProfileTab.jsx";
import SettingsTab from "./components/dashboard/dashboardmenu/SettingsTab.jsx";
import RoomDetail from "./components/dashboard/dashboardmenu/RoomDetail.jsx";
import SignInForm from "./components/auth/signinform.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainComponent /> },
      { path: "/signin", element: <Signinform /> },
      { path: "/signup", element: <SignUpForm /> },
      { path: "/verify-otp", element: <VerifyOtp /> },
      {
        path: "/dashboard",
        element: <MainLayout />,
        children: [
          { path: "", element: <Home /> },
          { path: "home", element: <Home /> },
          { path: "home/:roomId", element: <RoomDetail /> },
          { path: "monthly-report", element: <MonthlyReport /> },
          { path: "room-management", element: <RoomManagement /> },
          { path: "profile", element: <ProfileTab /> },
          { path: "settings", element: <SettingsTab /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
