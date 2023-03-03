import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

function CustomForm() {
  const [task, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter task"
        />
        <label htmlFor="task" className="label">
          Enter task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
}

export default CustomForm;