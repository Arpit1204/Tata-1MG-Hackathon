import React from "react";
import { Outlet } from "@tata1mg/router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Lazy load the Footer component

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
