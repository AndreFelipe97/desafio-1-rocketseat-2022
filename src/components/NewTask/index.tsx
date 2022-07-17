import styles from "./NewTask.module.scss";
import { FiPlusCircle } from "react-icons/fi";

export function NewTask() {
  return (
    <div className={styles.container}>
      <form className={styles.formNewTask}>
        <input className={styles.newTask} type="text" placeholder="Adicione uma nova tarefa" />
        <button className={styles.addNewTask} type="submit">
          Criar <FiPlusCircle />
        </button>
      </form>
    </div>
  );
}
