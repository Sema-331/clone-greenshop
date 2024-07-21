import { configureStore } from "@reduxjs/toolkit";
import slices from "../../Slices/SliceProducts";
import todo from '../../Slices/storeTraining'

export const store = configureStore({
  reducer: {
    products: slices,
    todos: todo
  }  
})
