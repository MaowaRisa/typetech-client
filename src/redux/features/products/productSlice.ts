import { createSlice } from "@reduxjs/toolkit";
type TProduct = {
    name: string;
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
        // addTodo: (state, action: PayloadAction<TTodo>) =>{
        //     state.todos.push({...action.payload, status: false})
        // },
        // removeTodo: (state, action: PayloadAction<string>) =>{
        //     state.todos = state.todos.filter((item) => item.id !== action.payload)
        // },
        // toggleCompleteState: (state, action: PayloadAction<string>) =>{
        //     const task =  state.todos.find((item) => item.id === action.payload);
        //     task!.status = !task?.status;
        //     state.todos.sort((a, b) => {
        //         if (a.status === false && b.status === true) {
        //             return -1;
        //         }
        //         if (a.status === true && b.status === false) {
        //             return 1;
        //         }
        //         return 0;
        //     });
        // },
        // filterTask: (state, action: PayloadAction<string>) =>{
        //     state.filteredTodo = state.todos.filter((item) => item.priority === action.payload);
        // }
    }
});
// export const {} = productSlice.actions;
export default productSlice.reducer
