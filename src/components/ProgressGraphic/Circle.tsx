import { ReactNode } from "react"

type CircleProps = {
    per: number
    children: ReactNode
}

const Circle = ({per, children}: CircleProps) => {
    return (
        <div 
            style={{background: `conic-gradient(#6363ff ${per}%, #242837 0%)`, transition: 2+"s"}}
            className="flex justify-center items-center w-[124px] h-[124px] rounded-full relative transition-colors"
        >
            {children}
        </div>
    )
}

export default Circle