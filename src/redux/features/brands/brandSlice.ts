import { createSlice } from "@reduxjs/toolkit";
export type TBrand = {
    name: string;
    image: string;
  };
type TInitialState = {
    brands: TBrand[];
}
const initialState:TInitialState = {
    brands:[],
}
const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: { 
    }
});
// export const {} = brandSlice.actions;
export default brandSlice.reducer
