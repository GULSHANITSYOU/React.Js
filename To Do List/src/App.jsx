import { useEffect, useState } from "react";
import { ToDoProvider } from "./context/ToDoContext";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";


function    App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      {
        id:  Date.now(),
        ...todo,
      },
      ...prev,
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodos) => (prevTodos.id == id ? todo : prevTodos))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodos) => prevTodos.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodos) =>
        prevTodos.id === id
          ? { ...prevTodos, completed: !prevTodos.completed }
          : prevTodos
      )
    );
  };

  useEffect(() => {
    const locTodos = JSON.parse(localStorage.getItem("locTodo"));
    if (locTodos && locTodos.length > 0) {
      setTodos(locTodos);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("locTodo", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <ToDoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <ToDoItems todo = {todo}/>
              </div>
            ))}
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
