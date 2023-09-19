import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  cart: [],
};

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartitem = cartItems.find(
    (cartItem) =>
      cartItem.name === productToAdd.name && cartItem.size === productToAdd.size
  );

  // if found increment quantity
  if (existingCartitem) {
    return cartItems.map((cartItem) =>
      cartItem.name === productToAdd.name && cartItem.size === productToAdd.size
        ? { ...cartItem, qty: productToAdd.qty }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, qty: productToAdd.qty }];
};

const minusCart = (cartItems, productToMinus) => {
  const findItemCart = cartItems.find(
    (item) => item.name === productToMinus.name
  );

  if (findItemCart) {
    return cartItems.map((product) =>
      product.name === productToMinus.name &&
      product.size === productToMinus.size
        ? { ...product, qty: productToMinus.qty, total: productToMinus.total }
        : product
    );
  }
};

const plusCart = (cartItems, productToPlus) => {
  const findItemCart = cartItems.find(
    (item) => item.name === productToPlus.name
  );

  if (findItemCart) {
    return cartItems.map((product) =>
      product.name === productToPlus.name && product.size === productToPlus.size
        ? { ...product, qty: productToPlus.qty, total: productToPlus.total }
        : product
    );
  }
};

const removeCart = (cartItems, productToRemoveCart) => {
  const remove = cartItems.filter(
    (cartItem) =>
      cartItem.size !== productToRemoveCart.size ||
      cartItem.name !== productToRemoveCart.name
  );

  return remove;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCart: (state, action) => {
      state.cart = addCartItem(state.cart, action.payload);
    },
    setMinusCart: (state, action) => {
      state.cart = minusCart(state.cart, action.payload);
    },
    setRemoveCart: (state, action) => {
      state.cart = removeCart(state.cart, action.payload);
    },
    setPlusCart: (state, action) => {
      state.cart = plusCart(state.cart, action.payload);
    },
  },
});

export const { setCart, setMinusCart, setRemoveCart, setPlusCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
