import { useContext, useRef } from "react";
import ToDo from "./components/ToDo";
import ToDoContext from "./context/TodoContext";
import { nanoid } from "nanoid";

function App() {
  const todoInput = useRef(null);
  const { todos, addtodo, updatetodo, deletetodo } = useContext(ToDoContext);

  function HandalSubmit(e) {
    e.preventDefault();

    const todotext = todoInput.current.value;
    if (todotext.length) addtodo(todotext);
    todoInput.current.value = "";
  }

  return (
    <div
      id="App"
      className="bg-black flex items-center justify-center text-white h-screen text-2xl font-bold p-12 ">
      <div className="app-container  border-white border-2   px-16 py-10  rounded-xl flex flex-col h-full w-9/12 ">
        <form
          onSubmit={HandalSubmit}
          className="input border-2 rounded-xl px-6 py-4 w-full flex justify-center">
          <input
            ref={todoInput}
            className="w-9/12 h-12 bg-inherit px-6 py-6 rounded-xl border-2 flex"
            placeholder="Enter your to do ! "
            type="text"
          />
          <button className=" bg-inherit px-12  py-2 rounded-xl border-2 ml-6 hover:scale-105 transition-all">
            Add
          </button>
        </form>

        <ul className="border-2 rounded-lg w-full h-full mt-6  px-4 py-2 overflow-scroll overflow-x-hidden  scroll-smooth  ">
          {todos.map((todo) => (
            <ToDo
              todotext={todo.todotext}
              todokey={todo.key}
              updatetodo={updatetodo}
              deletetodo={deletetodo}></ToDo>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
