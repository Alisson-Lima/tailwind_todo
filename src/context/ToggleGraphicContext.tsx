import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type ToggleGraphicContextProps = {
    openGraphic: boolean,
    setOpenGraphic: Dispatch<SetStateAction<boolean>>
}

export const ToggleGraphic = createContext<ToggleGraphicContextProps | null>(null)

type ToggleGraphicProviderProps = {
    children: ReactNode
}

export const ToggleGraphicProvider: React.FC<ToggleGraphicProviderProps> = ({children})=>{

    const [openGraphic, setOpenGraphic] = useState<boolean>(false)
    const toggleGraphicValue: ToggleGraphicContextProps = {
        openGraphic,
        setOpenGraphic
    }

    return (
        <ToggleGraphic.Provider value={toggleGraphicValue}>
            {children}
        </ToggleGraphic.Provider>
    )
}

export const useToggleGraphic = () =>{
    const context = useContext(ToggleGraphic)

    if(!context){
        throw new Error("useToggleGraphic must be used within a ToggleGraphicProvider")
    }
    return context
}