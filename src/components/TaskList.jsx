import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

function TaskList({ tasks, changeStatus }) {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem changeStatus={changeStatus} key={task.id} task={task} />
        ))}
    </ul>
  );
}

export default TaskList;
