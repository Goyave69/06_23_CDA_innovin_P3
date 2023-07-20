import Root from "./Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import OurWines from "../pages/OurWines";
import Login from "../pages/Login";
import Admin from "./Admin";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import AdminWine from "../components/Admin/Wine/AdminWine";
import AdminUser from "../components/Admin/User/AdminUser";
import Error404 from "../pages/404";
import SignUp from "../pages/SignUp";
import WineDetails from "../pages/WineDetails";
import Cart from "../pages/Cart";
import Profil from "../pages/Profil";
import AdminArticle from "../components/Admin/Article/AdminArticle";

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
      {
        path: "wine/:id",
        element: <WineDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profil",
        element: <Profil />,
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
        path: "user",
        element: <AdminUser />,
      },
      {
        path: "article",
        element: <AdminArticle />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export default Routes;
