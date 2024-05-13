import { Outlet } from "react-router-dom";
import Navigation from "../components/globals/Navigation";
const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
