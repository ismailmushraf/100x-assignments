import { useState } from "react";

export function CreateTodo({ todos, setTodos }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return <div>
      <input type="input" placeholder="title" onChange={function(e) {
        setTitle(e.target.value);
      }}/> <br/>
      <input type="input" placeholder="description" onChange={function(e) {
        setDescription(e.target.value);
      }}/><br/>
      <button onClick={setTodos({
        title: title,
        description: description,
        completed: false
      })}>Add Todo</button>
    </div>
}
