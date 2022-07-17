import styles from "./NewTask.module.scss";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";

export function NewTask() {
  const [newTask, setNewTask] = useState<string>("");

  function handleNewTaskChange() {
    setNewTask(event.target.value);
  }

  const isNewTaskEmpity = newTask.length === 0;

  return (
    <div className={styles.container}>
      <form className={styles.formNewTask}>
        <input
          className={styles.newTask}
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
          name="newTask"
          onChange={handleNewTaskChange}
          value={newTask}
        />
        <button
          className={styles.addNewTask}
          type="submit"
          disabled={isNewTaskEmpity}
        >
          Criar <FiPlusCircle />
        </button>
      </form>
    </div>
  );
}
