import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Hotels from "./Pages/Hotels";
import Habitaciones from "./Pages/Habitaciones";
import LoginAdmin from "./Pages/AdminHotels";
import { useRoutes } from "react-router-dom";
import AdminHotels from "./Pages/AdminHotels";
import Login from "./Pages/Login";
import Listhotel from "./Pages/Listhotel";
import ListReservations from "./Pages/ListReservations";
import PrivateRoute from "./routes/PrivateRoute";

const routes = createRoutesFromChildren([
  <Route path="/" element={<App />}>
    <Route index element={<Hotels />} />
    <Route path="habitaciones/:id" element={<Habitaciones />} />
  </Route>,

  <Route path="managehotels/*" element={<AdminHotels />}>
    <Route  index element={<Login />} />
    <Route
      path="listhotels"
      element={
        <PrivateRoute>
          <Listhotel />
        </PrivateRoute>
      }
    />
    <Route
      path="listreservations"
      element={
        <PrivateRoute>
          <ListReservations />
        </PrivateRoute>
      }
    />
  </Route>,
]);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
