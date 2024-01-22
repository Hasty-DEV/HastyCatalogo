import { Outlet } from "react-router-dom";
import Header from "../partials/Header/Header";

import Search from "../pages/SearchCategory/search";
import Products from "../pages/products/Products";



const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Search/>
      <Products />
      {/* // <Footer /> */}
    </div>
  );
};

export default MainLayout;