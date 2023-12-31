import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { Sm } from "../types";

type SistemMessageContextProps = {
    sm: Sm,
    setSm: Dispatch<SetStateAction<Sm>>
}

type SistemMessageContextProviderProps = {
    children: ReactNode;
}


export const SistemMessageContext = createContext<SistemMessageContextProps | null>(null)

export const SistemMessageContextProvider: React.FC<SistemMessageContextProviderProps> = ({children})=>{
    const initialValues: Sm = {type:"", msg: ""}
    const [sm, setSm] = useState<Sm>(initialValues)
    const smContextValue: SistemMessageContextProps = {sm, setSm}

    return (
        <SistemMessageContext.Provider value={smContextValue}>
            {children}
        </SistemMessageContext.Provider>
    )
}