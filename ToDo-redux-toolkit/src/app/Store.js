import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/Todos/Todo Slice';

export const store = configureStore({
    reducer: todoReducer
})