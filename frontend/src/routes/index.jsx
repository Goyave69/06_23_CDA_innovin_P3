import Root from "./Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import OurWines from "../pages/OurWines";
import Login from "../pages/Login";

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
    ],
  },
];

export default Routes;
