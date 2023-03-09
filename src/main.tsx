import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./navigation";
import { RouterProvider } from "react-router-dom";
import "./sass/style.scss";
import DataProvider from "./context/Data";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={Routes} />
    </DataProvider>
  </React.StrictMode>
);
