import React, { createContext, ReactNode, useCallback, useState } from "react";
import { api } from "../service/api";

interface DeleteContextData {
  deleteValues(id: number): void;
}

interface DeleteProviderProps {
  children: ReactNode;
}

export const DeleteContext = createContext({} as DeleteContextData);

export function DeleteProvider({ children }: DeleteProviderProps) {
  const deleteValues = useCallback(async (id: number) => {
    try {
      await api.delete(`tasks/${id}`);
    } catch (error) {}
  }, []);

  return (
    <DeleteContext.Provider value={{ deleteValues }}>
      {children}
    </DeleteContext.Provider>
  );
}
