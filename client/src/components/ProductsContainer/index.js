import { useState, useEffect } from "react";

import Card from "../Card";
import { fetchApi } from "../../utils/fetchApi";
import {  URL } from "../../constants/api"; 
import "./productscontainer.css";

const ProductsContainer = (props) => {
  const [productList, updateProductList] = useState([]);

  useEffect(() => {
    getProductList(props.category);
  }, [props.category]);

  const getProductList = async (category) => {
    const products = await fetchApi(URL + '/products');
    const productsList = products.filter(
          (product) => product.category === category.id
        );
        updateProductList(productsList);
    };
    
  return (
    <div className="products">
      {productList.map((product) => {
        return <Card product={product} />;
      })}
    </div>
  );
};

export default ProductsContainer;
