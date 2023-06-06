import Root from "./Root";
import Home from "../pages/Home";

const Routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default Routes;
