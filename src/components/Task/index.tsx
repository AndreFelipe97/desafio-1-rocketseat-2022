import { useState } from "react";
import { FiTrash } from "react-icons/fi";

import styles from "./Task.module.scss";

interface ITask {
  id: number;
  task: string;
  finished: boolean;
}

export function Task({ id, task, finished }: ITask) {
  const [checked, setChecked] = useState<boolean>(finished);

  function handleCheck() {
    console.log(!checked);
    setChecked(!checked);
  }

  return (
    <div className={styles.container}>
      <input
        type="radio"
        id={String(id)}
        name={String(id)}
        onChange={handleCheck}
        defaultChecked={checked}
      />
      <label htmlFor={String(id)}>{task}</label>
      <FiTrash />
    </div>
  );
}
