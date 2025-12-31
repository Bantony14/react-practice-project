import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/Todo/Todo.js'

export const store = configureStore({
    reducer : todoReducer
})