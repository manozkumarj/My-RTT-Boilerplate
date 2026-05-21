import { createSlice } from '@reduxjs/toolkit'


// const initialState = []
const initialState = [
    {
        id: 1,
        text: 'Learn Redux Toolkit',
        completed: true
    },
    {
        id: 2,
        text: 'Build a Redux app',
        completed: false
    },
];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // todos: (state) => {
        //     return state
        // },
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.filter(_item => _item.id !== action.payload.id)
        }
    }
});

export const { addTodo, deleteTodo } = todosSlice.actions
export const getAllTodos = (state) => state.todos
export default todosSlice.reducer