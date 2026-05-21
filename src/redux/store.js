import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./slices/todosSlice"
import counterReducer from "./slices/counterSlice"

const store = configureStore({
    reducer: {
        todos: todosReducer,
        counter: counterReducer
    },
})

export default store