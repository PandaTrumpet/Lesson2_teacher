import { Todo } from './../types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface TodoState { 
    todos:Todo[]
}
const initialState :TodoState= {
    todos:[]
}
const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToDo: (state, action:PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        deleteToDo: (state, action:PayloadAction<number >) => {
            state.todos = state.todos.filter((el)=> el.id !==action.payload)
        }
    },

})

export const { addToDo,deleteToDo}=todoSlice.actions