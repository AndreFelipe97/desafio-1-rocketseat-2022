import React, { createContext, ReactNode, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface ITask {
  task: string;
  finished: boolean;
}

interface PostContextData {
  postValues(data: ITask): void;
}

interface PostProviderProps {
  children: ReactNode;
}

export const PostContext = createContext({} as PostContextData);

export function PostProvider({ children }: PostProviderProps) {
  const postValues = useCallback(async (data: ITask) => {
    try {
      await api.post("tasks", data);
      toast("Tarefa cadastrada com sucesso!", { type: "success" });
    } catch (error) {
      toast("Erro ao cadastrar a atividade", { type: "error" });
    }
  }, []);

  return (
    <PostContext.Provider value={{ postValues }}>
      {children}
    </PostContext.Provider>
  );
}
