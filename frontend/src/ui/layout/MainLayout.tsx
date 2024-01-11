import { Outlet } from "react-router-dom";
import Header from "../partials/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* // <Footer /> */}
    </>
  );
};

export default MainLayout;