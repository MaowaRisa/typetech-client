/* eslint-disable prefer-const */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
type cartState = {
  cartItems: any[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};
const initialState: cartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        const newItem = { ...action.payload };

        // update using immer
        state.cartItems = [...state.cartItems, newItem];
        state.cartTotalQuantity += 1;
        state.cartTotalAmount += action.payload.price;
  
        // Update localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  
        // Use toast for feedback
        toast.success("Product added successfully");
    },
    // decreaseCart(state, action) {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );

    //   if (state.cartItems[itemIndex].cartQuantity > 1) {
    //     state.cartItems[itemIndex].cartQuantity -= 1;

    //     toast.info("Decreased product quantity", {
    //       position: "bottom-left",
    //     });
    //   } else if (state.cartItems[itemIndex].cartQuantity === 1) {
    //     const nextCartItems = state.cartItems.filter(
    //       (item) => item.id !== action.payload.id
    //     );

    //     state.cartItems = nextCartItems;

    //     toast.error("Product removed from cart", {
    //       position: "bottom-left",
    //     });
    //   }

    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // },
    // removeFromCart(state, action) {
    //   state.cartItems.map((cartItem) => {
    //     if (cartItem.id === action.payload.id) {
    //       const nextCartItems = state.cartItems.filter(
    //         (item) => item.id !== cartItem.id
    //       );

    //       state.cartItems = nextCartItems;

    //       toast.error("Product removed from cart", {
    //         position: "bottom-left",
    //       });
    //     }
    //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    //     return state;
    //   });
    // },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
   
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    // clearCart(state, action) {
    //   state.cartItems = [];
    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    //   toast.error("Cart cleared", { position: "bottom-left" });
    // },
  },
});

export const { addToCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
