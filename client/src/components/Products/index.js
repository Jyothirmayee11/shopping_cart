import React, { useEffect, useState } from 'react';

import Card from '../Card';

import './products.css';

function Products() {
  const [ categories, updateCategories ] = useState([]);
  // const [ currentCategory, updateCurrentCategory ] = useState({});
  const [ productList, updateProductList] = useState([]);

  useEffect(() => {
    if(categories.length === 0){
    fetch('http://localhost:5000/categories').then((res) => res.json()).then((result) => {
    updateCategories(result);
    })
    fetch('http://localhost:5000/products').then((res) => res.json()).then((products) => {
      const productsList = products.filter((product) => product.category === products[0].category)
      updateProductList(productsList);
    })
    }
  },[categories, categories.length, updateCategories]);

  const getProductList = (category) => {
    fetch('http://localhost:5000/products').then((res) => res.json()).then((products) => {
      const productsList = products.filter((product) => product.category === category.id)
      updateProductList(productsList);
    })
  }
  
  return (
    <div className='products-page'>
      <div className='sidebar'>
        {categories.map((category, key) => {
          return(
            <div className="link" key= {key} to = {`/ ${category.name}`} onClick={() => getProductList(category)} > {category.name} </div>
          )
        })}
      </div>
      <div className="products">
        {productList.map((product) => {
          return(
            <Card product={product}/>
          )
        })}
      </div>

    </div>
  );
}

export default Products;
