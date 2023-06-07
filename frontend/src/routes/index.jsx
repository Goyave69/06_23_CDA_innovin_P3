import Root from "./Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import OurWines from "../pages/OurWines";

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
    ],
  },
];

export default Routes;
