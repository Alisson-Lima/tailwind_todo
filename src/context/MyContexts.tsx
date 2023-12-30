import React, { ReactNode } from "react";
import { TaskContextProvider } from "./TaskContext";
import { SistemMessageContextProvider } from "./SistemMessageContext";

type MyContextsProps = {
    children: ReactNode
}

const MyContexts: React.FC<MyContextsProps> = ({children}) => {
  return (
    <TaskContextProvider>
        <SistemMessageContextProvider>
            {children}
        </SistemMessageContextProvider>
    </TaskContextProvider>
  );
}

export default MyContexts