import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger"
import todosReducer from "./slices/todosSlice"
import counterReducer from "./slices/counterSlice"

const logger = createLogger();

const store = configureStore({
    reducer: {
        todos: todosReducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: false
        }),
        logger
    ],
    devTools: false
})

export default store