import { createSlice } from "@reduxjs/toolkit";
const initialState = { showCart: false, notification: null };
const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotifications(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
