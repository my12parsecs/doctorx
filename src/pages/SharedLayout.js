import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SharedLayout(props) {
  return (
    <div className="entire">
      <Navbar handleClick={props.handleClick} lang={props.lang}/>
      <Outlet />
      <Footer />
    </div>
  );
}
