import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ToDoContext from "./TodoContext";

const ContextProvider = ({ children }) => {
  const [todos, settodos] = useState([
    { key: nanoid(), todotext: "Hello ji kaise ho Let's make To do" },
  ]);

  const addtodo = (todotext) => {
    const newTodo = { key: nanoid(), todotext };
    settodos((prev) => [...prev, newTodo]);
  };

  const updatetodo = (key, newText) => {
    settodos((prev) =>
      prev.map((todo) =>
        todo.key === key ? { ...todo, todotext: newText } : todo
      )
    );
  };

  const deletetodo = (key) => {
    settodos((prev) => prev.filter((todo) => todo.key !== key));
  };

  useEffect(() => {
    try {
      const locTodos = JSON.parse(localStorage.getItem("todos"));
      console.log("hl");

      if (locTodos && locTodos.length > 0) {
      console.log("hlo");

        settodos(locTodos);
      }
    } catch (error) {
      console.error("Failed to load todos from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("hi");
    } catch (error) {
      console.error("Failed to save todos to localStorage:", error);
    }
  }, [todos]);

 

  return (
    <ToDoContext.Provider value={{ todos, addtodo, updatetodo, deletetodo }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ContextProvider;
