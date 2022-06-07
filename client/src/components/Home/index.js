import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Home = () => {
  const [categories, updateCategories] = useState([]);
  const [offers, updateOffers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length === 0) {
      fetch("http://localhost:5000/categories")
        .then((res) => res.json())
        .then((result) => {
          updateCategories(result);
        });
    }
    fetch("http://localhost:5000/banners")
      .then((res) => res.json())
      .then((result) => {
        updateOffers(result);
      });
  }, [categories, categories.length, updateCategories]);
  return (
    <>
      <div className="category-card">
        <Carousel>
          {offers.map((offer) => (
            <div>
              <img src={offer.bannerImageUrl} alt={offer.bannerImageAlt} />
              <p>{offer.bannerImageAlt} </p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <div key={index} className="category-card">
              <img src={category.imageUrl} alt={category.name} />
              <div className="name_des">
                <h3>{category.name}</h3>
                <div>{category.description}</div>
                <button onClick={() => navigate(`/products/${category.key}`)}>
                  Explore {category.key}{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Home;
