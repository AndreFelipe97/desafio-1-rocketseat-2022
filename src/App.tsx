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
        <div>fkdngldngd</div>
      </div>
    </>
  );
}

export default App;
