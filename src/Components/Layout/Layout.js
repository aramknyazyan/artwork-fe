import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.scss";

const AppLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
