import { FiClipboard } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./global.scss";
import styles from "./App.module.scss";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { useContext, useEffect } from "react";
import { Task } from "./components/Task";
import { GetContext } from "./hooks/useGet";

function App() {
  const { getValues, data } = useContext(GetContext);

  useEffect(() => {
    async function getResponse() {
      getValues();
    }

    getResponse();
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <NewTask />
      <div className={styles.wrapper}>
        <div className={styles.tasksInfo}>
          <div className={styles.tasks}>
            Tarefas criadas{" "}
            <span className={styles.countTasks}>{data.length}</span>
          </div>
          <div className={styles.tasksFinisehd}>
            Concluídas{" "}
            <span className={styles.countTasksFinished}>
              {data.length !== 0
                ? `${data.filter((d) => d.finished).length} de ${data.length}`
                : 0}
            </span>
          </div>
        </div>
        {data ? (
          data.map((d) => (
            <Task key={d.id} id={d.id} task={d.task} finished={d.finished} />
          ))
        ) : (
          <div className={styles.emptyTask}>
            <FiClipboard />
            <span className={styles.emptyTaskTitle}>
              Você ainda não tem tarefas cadastras
            </span>
            <span className={styles.emptyTaskSubtitle}>
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
