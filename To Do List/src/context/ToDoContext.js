import { useContext , createContext } from "react";


export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo: "to do msg",
            completed: false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo : (id , todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
});

export const ToDoProvider = ToDoContext.Provider; 

export default function useToDo(){
    return useContext(ToDoContext);
}

