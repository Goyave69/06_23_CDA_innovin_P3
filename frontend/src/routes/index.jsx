import Root from "./Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import OurWines from "../pages/OurWines";
import Login from "../pages/Login";
import Admin from "./Admin";
import Dashboard from "../pages/Dashboard";
import AdminWine from "../components/Admin/AdminWine";
import AdminTastingSheet from "../components/Admin/AdminTastingSheet";
import AdminUser from "../components/Admin/User/AdminUser";
import Error404 from "../pages/404";
import SignUp from "../pages/SignUp";
import CreationModal from "../components/Admin/CreationModal";

const Routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "wines",
        element: <OurWines />,
      },
      {
        path: "connect",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "wine",
        element: <AdminWine />,
      },
      {
        path: "tasting_sheet",
        element: <AdminTastingSheet />,
      },
      {
        path: "user",
        element: <AdminUser />,
      },
      {
        path: "modal-test",
        element: <CreationModal tableName="tastingsheets" />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export default Routes;
