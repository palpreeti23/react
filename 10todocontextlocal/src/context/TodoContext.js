import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:{
        id : 1,
        todo : '',
        completed : false
    },
    addTodo : (todo)=>{},
    editTodo : (id, todo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}

});

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}