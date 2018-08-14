import React from "react";
import Header from "../../Search/components/Header";
import Footer from "../../Search/components/Footer";
import "./styles.css";

export default ({ children }) => {
  return (
    <div className="vbox viewport">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
