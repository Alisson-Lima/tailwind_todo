import React, { ReactNode } from "react";
import { TaskContextProvider } from "./TaskContext";
import { SistemMessageContextProvider } from "./SistemMessageContext";
import { ToggleGraphicProvider } from "./ToggleGraphicContext";

type MyContextsProps = {
    children: ReactNode
}

const MyContexts: React.FC<MyContextsProps> = ({children}) => {
  return (
    <TaskContextProvider>
        <SistemMessageContextProvider>
          <ToggleGraphicProvider>
              {children}
          </ToggleGraphicProvider>
        </SistemMessageContextProvider>
    </TaskContextProvider>
  );
}

export default MyContexts