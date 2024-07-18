/* eslint-disable prefer-const */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

type TCartProduct = {
  name: string;
  brand: string;
  image: string;
  slug: string;
  price: number;
  stock: number;
  quantity: number;
}
type TInitialState = {
  products: TCartProduct[]
}
const initialState : TInitialState = {
  products: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      
      const isExists = state.products.find((item) => {
        return action.payload.slug === item.slug;
      });
      console.log(isExists)
      
      if(isExists){
        isExists.quantity += 1
      }else{
        state.products.push(action.payload)
      }
      // Use toast for feedback
      toast("Product added successfully");
    },
    resetCart(state){
      state.products = [];
      toast("cart cleared")
    },
    removeProductFromCart(state, action) {
      state.products = state.products.filter((item) => item.slug !== action.payload);
      toast('Product removed')
    }
  },
});

export const { addToCart, resetCart, removeProductFromCart} =
  cartSlice.actions;
export default cartSlice.reducer;
