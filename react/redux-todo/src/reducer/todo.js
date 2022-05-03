import { Component } from "react";
import {ADD_TODO} from "../action/action-type"

const initialState = []

export default (state=initialState,action) => {

    // console.log(state)

    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload]    

        default:
           return state

   
    }

}

// hi=>addTodo({type:"ADD_TODO",payload:"hi"}) => reducer => ADD_TODO return [...state,action.payload]

// hello=>addTodo({type:"ADD_TODO",payload:"hello"}) => reducer => ADD_TODO return ['hi',"hello"] => store => Component

// something=>addTodo({type:"ADD_TODO",payload:"something"}) => reducer => ADD_TODO return ['hi',"hello","something"] => store => component

