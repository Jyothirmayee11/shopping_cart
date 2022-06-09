import { useState, useEffect } from "react";

import Card from "../Card";
import { fetchApi } from "../../utils/fetchApi";
import { URL } from "../../constants/api";
import "./productscontainer.css";
import MobileCard from "../MobileCard";

const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const ProductsContainer = (props) => {
  const [ width, setWidth ]  =  useState(getWidth());
  const [productList, updateProductList] = useState([]);

  const resizeListener = () => {
    setWidth(getWidth());
  }

  useEffect(() => {
    getProductList(props.category);
    window.addEventListener('resize', resizeListener);
    return () => {
        window.removeEventListener('resize', resizeListener);
    }
  }, [props.category]);

  const getProductList = async (category) => {
    const products = await fetchApi(URL + "/products");
    const productsList = products.filter(
      (product) => product.category === category.id
    );
    updateProductList(productsList);
  };

  return (
    <div className="products">
      {productList.map((product, index) => {
        return width < 768 ?  <MobileCard key={index} product={product}/>: <Card key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductsContainer;
