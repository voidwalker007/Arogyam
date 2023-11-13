import React from "react";
import { Sidenav } from "./Sidenav";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex w-screen h-screen  p-5">
      <Sidenav />
      <div className="flex w-full mx-5 main-button-card h-full gap-5 border  ">

        <Outlet/>

      </div>
    </div>
  );
};
