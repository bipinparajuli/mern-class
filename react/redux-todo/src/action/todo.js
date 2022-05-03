import {ADD_TODO} from './action-type'

export const addTodo = (todo) => ({
    type:ADD_TODO,
    payload:todo
})