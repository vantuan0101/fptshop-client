import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: {
      reducer: (state, action) => {
        const checkItem = state.carts.findIndex(
          (item) => item.id === action.payload.id
        );
        if (checkItem !== -1) {
          state.carts[checkItem].quantity = state.carts[checkItem].quantity + 1;
        } else {
          state.carts.push(action.payload);
        }
      },
      prepare: (item, qty = 1) => {
        return {
          payload: {
            id: item.id,
            name: item.name,
            price: item.price,
            discountValue :item.discountValue,
            thumbnail : item.thumbnail,
            quantity: qty,
            typeProduct : item.typeProduct,
            sold : item.sold
          },
        };
      },
    },
    removeCart: (state, action) => {
      state.carts.splice(action.payload, 1);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
