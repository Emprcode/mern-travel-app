import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import Routers from "../../../router/Routers";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Routers />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
