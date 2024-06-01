import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './toDoSlice'

export const store = configureStore({
    reducer: {
        // reducer import 
       todos: todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState >