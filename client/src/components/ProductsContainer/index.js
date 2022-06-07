import { useState, useEffect } from "react";

import Card from "../Card";
import "./productscontainer.css";

const ProductsContainer = (props) => {
  const [productList, updateProductList] = useState([]);

  useEffect(() => {
    getProductList(props.category);
  }, [props.category]);

  const getProductList = (category) => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((products) => {
        const productsList = products.filter(
          (product) => product.category === category.id
        );
        updateProductList(productsList);
      });
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
