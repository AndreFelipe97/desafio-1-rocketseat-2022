import React, { ReactNode } from "react";
import { GetProvider } from "./useGet";
import { PostProvider } from "./usePost";
import { DeleteProvider } from "./useDelete";

interface IAppProvider {
  children: ReactNode;
}

function AppProvider({ children }: IAppProvider) {
  return (
    <GetProvider>
      <PostProvider>
        <DeleteProvider>{children}</DeleteProvider>
      </PostProvider>
    </GetProvider>
  );
}

export default AppProvider;
