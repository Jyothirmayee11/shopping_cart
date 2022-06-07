import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./components/SignUp";
import Products from "./components/Products";
import Home from "./components/Home";
import Login from "./components/Login";

import { useAuth } from "./hooks/useAuth";
import ProductsContainer from "./components/ProductsContainer";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn() ? children : <Navigate to="/signin" />;
};

const RestrictedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn() ? <Navigate to="/home" /> : children;
};

export const MainRoutes = () => {
  const [categories, updateCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((res) => {
        updateCategories(res);
      });
  }, [updateCategories]);

  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route
        path="/register"
        element={
          <RestrictedRoute>
            <Signup />
          </RestrictedRoute>
        }
      ></Route>
      <Route
        path="/signin"
        element={
          <RestrictedRoute>
            <Login />
          </RestrictedRoute>
        }
      ></Route>
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products categories={categories} />
          </PrivateRoute>
        }
      >
        <>
          {categories.length && (
            <Route
              path="/products"
              element={<Navigate replace to={`${categories[0].key}`} />}
            ></Route>
          )}
          {categories.map((category, key) => (
            <Route
              path={`${category.key}`}
              element={<ProductsContainer category={category} />}
              openCart={false}
            ></Route>
          ))}
        </>
      </Route>

      {/* <Route path="/cart" element={<Products openCart={true} allCategories={categories}/>}></Route> */}
    </Routes>
  );
};
