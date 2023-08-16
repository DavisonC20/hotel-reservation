import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Hotels from "./Pages/Hotels";
import Habitaciones from "./Pages/Habitaciones";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Hotels />} />
      <Route path="habitaciones/:id" element={<Habitaciones />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
