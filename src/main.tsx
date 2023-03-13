import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./navigation";
import DataProvider from "./context/Data";
import { RouterProvider } from "react-router-dom";
import "./sass/style.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={Routes} />
    </DataProvider>
  </React.StrictMode>
);
