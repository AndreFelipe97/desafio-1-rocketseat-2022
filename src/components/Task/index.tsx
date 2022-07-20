import { useContext, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { DeleteContext } from "../../hooks/useDelete";
import { GetContext } from "../../hooks/useGet";

import styles from "./Task.module.scss";

interface ITask {
  id: number;
  task: string;
  finished: boolean;
}

export function Task({ id, task, finished }: ITask) {
  const [checked, setChecked] = useState<boolean>(finished);
  const { deleteValues } = useContext(DeleteContext);
  const { getValues } = useContext(GetContext);

  function handleCheck() {
    console.log(!checked);
    setChecked(!checked);
  }

  function handleDelete() {
    Swal.fire({
      title: "Deletar!",
      icon: "warning",
      text: `Você quer deletar a tarefa ${task}?`,
      showCancelButton: true,
      confirmButtonText: "Deletar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteValues(id);
        getValues();
      }
    });
  }

  return (
    <div className={styles.container}>
      <input
        type="radio"
        id={String(id)}
        name={String(id)}
        onChange={handleCheck}
        checked={checked}
        defaultChecked={checked}
      />
      <label htmlFor={String(id)}>{task}</label>
      <button onClick={handleDelete} type="button">
        <FiTrash />
      </button>
    </div>
  );
}
