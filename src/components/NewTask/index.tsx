import styles from "./NewTask.module.scss";
import { FiPlusCircle } from "react-icons/fi";
import { useState, FormEvent, ChangeEvent, useContext } from "react";
import { api } from "../../service/api";
import { GetContext } from "../../hooks/useGet";
import { PostContext } from "../../hooks/usePost";

export function NewTask() {
  const [newTask, setNewTask] = useState<string>("");
  const { getValues } = useContext(GetContext);
  const { postValues } = useContext(PostContext);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  async function handleSubmitTask(event: FormEvent) {
    event.preventDefault();

    postValues({ task: newTask, finished: false });
    getValues();

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
