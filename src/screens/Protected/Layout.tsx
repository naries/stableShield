import React from "react";
import { AppSidebar, MainContent } from "../../Components/Layout";

const Layout = () => {
  return (
    <div className="wrapper">
      <AppSidebar />
      <MainContent />
    </div>
  );
};

export default Layout;
