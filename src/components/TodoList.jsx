import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  return (
    <div className=" inline-block item-center">
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        className="p-2 m-4 w-72 item-center  text-slate-600"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        className="border border-emerald-50 p-2 "
        onClick={() => {
          setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
          });
          setNewTodo("");
        }}
      >
        Add Task
      </button>

      <h1 className="text-4xl mt-10 border-b border-gray-500">Task Todo </h1>
      <ol className="m-4">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className="m-8"> {todo.task}</span>
            <button
              className=" border border-emerald-50 p-1 py-0"
              onClick={() => deleteTodo(todo.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
