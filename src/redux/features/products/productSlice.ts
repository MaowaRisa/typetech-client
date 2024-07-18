import { createSlice } from "@reduxjs/toolkit";
export type TProduct = {
    _id: string;
    name: string;
    slug: string;
    brand: string;
    quantity: number;
    price: number;
    rating: number;
    description: string;
    image: string;
    isDeleted: boolean;
  };
type TInitialState = {
    products: TProduct[];
}
const initialState:TInitialState = {
    products:[],
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    }
});
// export const {} = productSlice.actions;
export default productSlice.reducer
