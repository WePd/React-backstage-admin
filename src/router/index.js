import { Navigate } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import DashBoard from "../views/DashBoard";
import Departments from "../views/Departments";
import Employees from "../views/Employees";
import Permissions from "../views/Permissions";
import Salarys from "../views/Salarys";
import Setting from "../views/Setting";
import SocialSecuritys from "../views/SocialSecuritys";
import Attendances from "../views/Attendances";
import Accraditation from "../views/Accraditation";

const routes = [
  { path: "/login", element: <Login />, exact: true },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "dashBoard", element: <DashBoard /> },
      { path: "departments", element: <Departments /> },
      { path: "employees", element: <Employees /> },
      { path: "permissions", element: <Permissions /> },
      { path: "salarys", element: <Salarys /> },
      { path: "setting", element: <Setting /> },
      { path: "socialSecuritys", element: <SocialSecuritys /> },
      { path: "attendances", element: <Attendances /> },
      { path: "accraditation", element: <Accraditation /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
    exact: false,
  },
];

export default routes;
