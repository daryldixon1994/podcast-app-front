import React from "react";
import LandingPageNavBar from "../navbar/LandingPageNavBar";
import TopArrow from "../topArrow/TopArrow";
import Footer from "../Footer/Footer";

function PublicLayout({ children }) {
  return (
    <div>
      <LandingPageNavBar />
      <TopArrow toGo="up" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
