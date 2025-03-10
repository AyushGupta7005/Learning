import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [], quantity: 0, changed: false };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCartData(state, action) {
      state.items = action.payload.items;
      state.quantity = action.payload.quantity;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.quantity++;
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice + exisitingItem.price;
      }
      state.changed = true;
    },
    removeItemFromCart(state, action) {
      const itemID = action.payload;
      const exisitingItem = state.items.find((item) => item.id === itemID);
      if (exisitingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.title !== exisitingItem.title
        );
        state.quantity--;
      } else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
