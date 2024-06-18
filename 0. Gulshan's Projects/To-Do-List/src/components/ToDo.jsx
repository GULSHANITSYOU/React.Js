import {  useRef, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";

const ToDo = ({ todotext, todokey, updatetodo, deletetodo }) => {
  const checkbox = useRef(null);
  const inputText = useRef(null);
  const editBtn = useRef(null);
  const [Done, setDone] = useState("");
  const [todo, setTodo] = useState(todotext);
  const [saveEdit, setSaveEdit] = useState(<FaRegEdit />);

  function checkHandle(e) {
    if (e.target.checked) {
      setDone(" text-decoration-line: line-through opacity-45");
      editBtn.current.style.display = "none";
    } else {
      setDone("");
      editBtn.current.style.display = "block";
    }
  }

  function Editehandle() {
    inputText.current.readOnly = !inputText.current.readOnly;

    if (inputText.current.readOnly) {
      setSaveEdit(<FaRegEdit />);

      inputText.current.style.backgroundColor = "#000";
      inputText.current.style.color = "#fff";
    } else {
      inputText.current.style.backgroundColor = "#fff";
      inputText.current.style.color = "#000";

      setSaveEdit(<IoSaveOutline />);
    }
  }

  function submitHandle(e) {
    e.preventDefault();
    updatetodo(todokey, todo);
  }

  return (
    <li key = {todokey}>
      <form
        onSubmit={submitHandle}
        className="border-2 px-2 py-1 rounded-lg flex items-center justify-between text-left text-wrap">
        <input
          onChange={checkHandle}
          ref={checkbox}
          type="checkbox"
          className="w-6 h-6  border-2 mr-1 "
        />
        <input
          ref={inputText}
          type="text"
          name="todo"
          readOnly
          onChange={(e) => setTodo(e.target.value)}
          className={`mx-2 bg-inherit border-white border-2 rounded-lg px-1 py-1 w-full focus:border-0 text-xl ${Done}   `}
          value={todo}
          id=""
        />
        <div className="edit flex border-0 rounded-md px-2 gap-2 py-1  ">
          <button
            ref={editBtn}
            onClick={Editehandle}
            className="border-2 px-3 py-1 rounded-lg  hover:scale-105 transition-all">
            {saveEdit}
          </button>
          <button
            onClick={() => deletetodo(todokey)}
            className="border-2 px-3 py-1 rounded-lg  hover:scale-105 transition-all">
            <MdOutlineDelete />
          </button>
        </div>
      </form>
    </li>
  );
};

export default ToDo;
