import { Outlet } from "react-router-dom";
import { HeaderComponent, TopBar } from "../components";

const MainLayout = () => {
  return (
    <div>
      <TopBar text="Sign up and get 20% off to your first order. Sign Up Now" />
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

export default MainLayout;
