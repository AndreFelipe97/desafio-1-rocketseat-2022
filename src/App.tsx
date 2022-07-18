import { FiClipboard } from "react-icons/fi";

import { Header } from "./components/Header";
import "./global.scss";
import styles from "./App.module.scss";
import { NewTask } from "./components/NewTask";

function App() {
  return (
    <>
      <Header />
      <NewTask />
      <div className={styles.wrapper}>
        <div className={styles.tasksInfo}>
          <div className={styles.tasks}>
            Tarefas criadas <span className={styles.countTasks}>0</span>
          </div>
          <div className={styles.tasksFinisehd}>
            Concluídas <span className={styles.countTasks}>0</span>
          </div>
        </div>
        <div className={styles.emptyTask}>
          <FiClipboard />
          <span className={styles.emptyTaskTitle}>
            Você ainda não tem tarefas cadastras
          </span>
          <span className={styles.emptyTaskSubtitle}>
            Crie tarefas e organize seus itens a fazer
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
