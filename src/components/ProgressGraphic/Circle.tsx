import { ReactNode } from "react"

type CircleProps = {
    per: number
    children: ReactNode
}

const Circle = ({per, children}: CircleProps) => {
    return (
        <div 
            style={{background: `${per === 100 ? `conic-gradient(#46F577 100%, #242837 0%)` : `conic-gradient(#6363ff ${per}%, #242837 0%)`}`, transition: 150+"ms", } }
            className="flex justify-center items-center w-[116px] h-[116px] rounded-full relative transition-all"
        >
            {children}
        </div>
    )
}

export default Circle