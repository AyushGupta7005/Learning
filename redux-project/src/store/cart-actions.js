import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch(
        "https://redux-basics-5b369-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Some error occured!");
      }
      const responseData = await response.json();
      return responseData;
    }
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCartData({
          items: cartData.items || [],
          quantity: cartData.quantity || 0,
        })
      );
    } catch (error) {
      fetchData().catch((error) => {
        dispatch(
          uiActions.showNotifications({
            status: "error",
            title: "Failed to access cart",
            message: "Cart data failed cannot be accessed",
          })
        );
      });
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifications({
        status: "pending",
        title: "Sending Data",
        message: "Sending cart data to db",
      })
    );
    async function sendCartData() {
      const response = await fetch(
        "https://redux-basics-5b369-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Some error occured!");
      }
    }
    try {
      await sendCartData();
      dispatch(
        uiActions.showNotifications({
          status: "success",
          title: "Data sent!",
          message: "Cart data uploaded successfully",
        })
      );
    } catch (error) {
      sendCartData().catch((error) => {
        dispatch(
          uiActions.showNotifications({
            status: "error",
            title: "Sending Failed",
            message: "Sending cart data failed",
          })
        );
      });
    }
  };
};
