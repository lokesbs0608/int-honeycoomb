import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Router from "../router";

const Layout = ({ props }: any) => {
  return (
    <div>
      <div>
        <SideBar />
        <Header />
      </div>
      <Router/>
    </div>
  );
};

export default Layout;
