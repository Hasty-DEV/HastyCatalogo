import { Outlet } from "react-router-dom";
import Header from "../../partials/Header/Header";
import Products from "../../../pages/products/Products";
import Footer from "../../partials/Footer/Footer";


const MainLayout= () => {
  return (
    <>
      <Header />
      <Outlet />
      <Products />
      <Footer/>
    </>
  );
};

export default MainLayout;
