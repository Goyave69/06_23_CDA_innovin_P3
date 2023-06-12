import Root from "./Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import OurWines from "../pages/OurWines";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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
];

export default Routes;
