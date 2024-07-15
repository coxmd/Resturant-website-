import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <div className="credit">
        Copyright Ⓒ 2024 DineEase. All Rights Reserved.
        <div>
          Made with<div>&#10084;</div> by
          Bilal Ahmed
        </div>
      </div>
    </div>
  );
}

export default Layout;
