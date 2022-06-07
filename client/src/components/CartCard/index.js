import React from "react";
import { connect } from "react-redux";

import { addItem, removeItem } from "../../redux/actions";

import "./cartcard.css";

function CartCard(props) {
  const { product, addItem, removeItem } = props;
  return (
    <div className="cart_card">
      <div className="card_content">
        <img className="image" src={product.imageURL} alt={product.name} />
        <div className="details">
          <div>{product.name}</div>
          <div className="count">
            <div className="icon" onClick={() => removeItem(product)}>
              {" "}
              -{" "}
            </div>
            <div> {product.count}</div>
            <div className="icon" onClick={() => addItem(product)}>
              {" "}
              +{" "}
            </div>
            <div> x {product.price}</div>
            <div className="total">{product.totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    totalCartPrice: state.totalCartPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
