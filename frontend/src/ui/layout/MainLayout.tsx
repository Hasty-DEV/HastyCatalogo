import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../partials/Header/Header';
import SearchCategory from '../pages/SearchCategory/SearchCategory';
import Products from '../pages/products/Products';
import Search from '../pages/Search/Search';

const MainLayout: React.FC = () => {
  return (
    <div >
    <Header />
    <Outlet />
     <div className="d-flex  p-3">
        <SearchCategory />
        <Search />
      </div>


    <Products />
    {/* // <Footer /> */}
   </div>
);
};

export default MainLayout;
