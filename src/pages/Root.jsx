import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { useLayoutEffect } from "react";
import Footer from "../components/footer/Index";
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
const RootLayout = () => {
  return (
    <div>
      <Wrapper>
        <Navigation />
        <Outlet />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default RootLayout;
