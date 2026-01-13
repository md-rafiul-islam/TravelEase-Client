import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col  min-h-screen ">
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>

      <main className="flex-1 w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>

      <footer className="w-11/12 mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
