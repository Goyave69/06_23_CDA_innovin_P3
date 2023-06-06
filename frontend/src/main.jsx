import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "./routes/index";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(Routes);

root.render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
