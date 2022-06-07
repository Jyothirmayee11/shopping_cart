import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import Cart from "../Cart";
import cartLogo from "../../assets/cart.svg";

import "./navigation.css";

function Navigation(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const { isLoggedIn, removeUserLogin } = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
    removeUserLogin();
    navigate("/signin");
  };
  return (
    <>
      <div className="navigation">
        <div className="home-products">
          <NavLink to="/home"> Home </NavLink>
          <NavLink to="/products"> Products </NavLink>
        </div>
        <div className="signup-login-cart">
          {!isLoggedIn() ? (
            <div className="signup-login">
              <NavLink to="/signin"> SignIn </NavLink>
              <NavLink to="/register"> Register </NavLink>
            </div>
          ) : (
            <div className="logout" onClick={() => Logout()}>
              Logout
            </div>
          )}

          <div className="cart" onClick={() => setCartOpen(true)}>
            <img className="cart-logo" src={cartLogo} alt="cart" />
            <div className="cart-items"> {props.cartItems.length} items </div>
          </div>
        </div>
      </div>
      <Outlet />
      {cartOpen && <Cart setCartOpen={setCartOpen} />}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
