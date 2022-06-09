import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar";
import MobileSidebar from "../MobileSidebar";
import "./products.css";

const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

function Products(props) {
  const [width, setWidth ] = useState(getWidth());

  const resizeListener = () => {
    setWidth(getWidth());
  }

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => {
        window.removeEventListener('resize', resizeListener);
    }
  }, []);
  
  return (
    <div className="products-page">
      {width < 767 ? <MobileSidebar categories={props.categories}/> : <Sidebar categories={props.categories}/>}
      <Outlet />
    </div>
  );
}

export default Products;
