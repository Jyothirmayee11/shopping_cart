import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar";
import "./products.css";

function Products(props) {
  return (
    <div className="products-page">
      <Sidebar categories={props.categories} />
      <Outlet />
    </div>
  );
}

export default Products;
