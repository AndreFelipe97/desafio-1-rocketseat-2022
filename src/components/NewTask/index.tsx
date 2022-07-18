import styles from "./NewTask.module.scss";
import { FiPlusCircle } from "react-icons/fi";
import { useState, FormEvent, ChangeEvent } from "react";
import { api } from "../../service/api";

export function NewTask() {
  const [newTask, setNewTask] = useState<string>("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  async function handleSubmitTask(event: FormEvent) {
    event.preventDefault();

    await api.post("tasks", { task: newTask, finished: false });

    setNewTask("");
  }

  const isNewTaskEmpity = newTask.length === 0;

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmitTask} className={styles.formNewTask}>
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
