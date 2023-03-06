import { useState } from "react";
import "./App.css";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };
  const changeStatus = (id) => {
    setTasks((prev) =>
      prev.map((item) => {
        if (item.id == id) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
  };
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList changeStatus={changeStatus} tasks={tasks} />}
    </div>
  );
}

export default App;
