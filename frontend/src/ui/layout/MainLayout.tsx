import { Outlet } from "react-router-dom";
import Header from "../partials/Header/Header";
import Products from "../pages/listProducts";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Products/>
      {/* // <Footer /> */}
    </div>
  );
};

export default MainLayout;