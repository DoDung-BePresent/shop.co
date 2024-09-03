import { Outlet } from "react-router-dom";
import { Footer, Header, TopBar } from "../components";

const MainLayout = () => {
  return (
    <div>
      <TopBar text="Sign up and get 20% off to your first order. Sign Up Now" />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
