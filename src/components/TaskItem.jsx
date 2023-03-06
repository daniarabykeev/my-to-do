import React, { useState } from "react";
import styles from "./TaskItem.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";

function TaskItem({ task, changeStatus }) {
  return (
    <div>
      <li className={styles.task}>
        <div className={styles["task-group"]}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={task.checked}
            onChange={() => changeStatus(task.id)}
            name={task.name}
            id={task.id}
          />
          <label className={styles.label} htmlFor={task.id}>
            {task.name}
            <p className={styles.checkmark}>
              <CheckIcon strokeWidth={2} width={24} height={24} />
            </p>
          </label>
        </div>
      </li>
    </div>
  );
}

export default TaskItem;
