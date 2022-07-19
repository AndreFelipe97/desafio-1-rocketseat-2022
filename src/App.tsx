import { FiClipboard } from "react-icons/fi";

import { Header } from "./components/Header";
import "./global.scss";
import styles from "./App.module.scss";
import { NewTask } from "./components/NewTask";
import { useEffect, useState } from "react";
import { api } from "./service/api";
import { Task } from "./components/Task";

interface IData {
  id: number;
  task: string;
  finished: boolean;
}

function App() {
  const [data, setData] = useState<Array<IData>>([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get("tasks");
      setData(response.data);
    }
    getData();
  }, []);

  return (
    <>
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
