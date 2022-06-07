import { ADD_ITEM, REMOVE_ITEM } from "./constants";
const initialState = {
  cartItems: [],
  totalCartPrice: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const items = state.cartItems.filter(
        (product) => product.id !== action.payload.id
      );
      let newItem = action.payload;
      newItem.count = newItem.count ? newItem.count + 1 : 1;
      newItem.totalPrice = newItem.price * newItem.count;
      return {
        cartItems: [...items, newItem],
        totalCartPrice: state.totalCartPrice + action.payload.price,
      };
    case REMOVE_ITEM: {
      const removeItem = action.payload;
      const items = state.cartItems.filter(
        (product) => product.id !== action.payload.id
      );
      removeItem.count = removeItem.count - 1;
      removeItem.totalPrice = removeItem.price * removeItem.count;
      if (removeItem.count === 0)
        return {
          cartItems: [...items],
          totalCartPrice: state.totalCartPrice - action.payload.price,
        };
      else {
        return {
          cartItems: [...items, removeItem],
          totalCartPrice: state.totalCartPrice - action.payload.price,
        };
      }
    }
    default: {
      return state;
    }
  }
};
