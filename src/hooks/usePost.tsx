import React, { createContext, ReactNode, useCallback, useState } from "react";
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
    } catch (error) {}
  }, []);

  return (
    <PostContext.Provider value={{ postValues }}>
      {children}
    </PostContext.Provider>
  );
}
