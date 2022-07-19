import React, { ReactNode } from "react";
import { GetProvider } from "./useGet";
import { PostProvider } from "./usePost";

interface IAppProvider {
  children: ReactNode;
}

function AppProvider({ children }: IAppProvider) {
  return (
    <GetProvider>
      <PostProvider>{children}</PostProvider>
    </GetProvider>
  );
}

export default AppProvider;
