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
        Copyright Ⓒ 2024. All Rights Reserved.
        <div>
          Made with<div>&#10084;</div> by{" "}
          <a 
            href="https://www.linkedin.com/in/cox-musyoki-62ab96185/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Cox Musyoki
          </a>
        </div>
      </div>
    </div>
  );
}

export default Layout;
