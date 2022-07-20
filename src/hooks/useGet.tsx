import React, { createContext, ReactNode, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface ITask {
  id: number;
  task: string;
  finished: boolean;
}

interface GetContextData {
  data: Array<ITask>;
  getValues(): void;
}

interface GetProviderProps {
  children: ReactNode;
}

export const GetContext = createContext({} as GetContextData);

export function GetProvider({ children }: GetProviderProps) {
  const [data, setData] = useState<Array<ITask>>([]);

  const getValues = useCallback(async () => {
    try {
      const { data } = await api.get("tasks");
      setData(data);
    } catch (error) {
      toast("Erro ao listar as atividades", { type: "error" });
    }
  }, []);

  return (
    <GetContext.Provider value={{ data, getValues }}>
      {children}
    </GetContext.Provider>
  );
}
