import React from "react";
import BarTitles from "../Components/BarTitles/BarTitles";
import HeaderAdmin from "../Components/Header/HeaderAdmin";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Context/AuthProvider";

function AdminHotels() {
  return (
    <>
      <AuthProvider>
        <header>
          <HeaderAdmin />
        </header>
        <main>
          <Outlet />
        </main>
      </AuthProvider>
    </>
  );
}

export default AdminHotels;
