import { useEffect, useState } from "react"
import { useTaskContext } from "../../context/TaskContext"
import Circle from "./circle"

const ProgressGraphic = () => {

    const {tasks} = useTaskContext()
    const [percentege, setPercentege] = useState<number>(0)

    const getPercentege = () =>{

        const total = tasks.length
        const done = tasks.filter(tasks => tasks.status === true).length
        const percentegeDone = (done / total) * 100
        setPercentege(parseFloat(percentegeDone.toFixed(0)))

    }

    useEffect(()=>{
        getPercentege()
    }, [tasks])

    useEffect(()=>{
        getPercentege()
    },[])
    


    return (
        <div className=" bg-gray-600 p-4 w-fit h-fit rounded-2xl">
            <Circle per={percentege}>
                <span className="text-2xl text-gray-100 font-bold bg-gray-600 w-[70%] h-[70%] rounded-full flex justify-center items-center"> 
                    {percentege}%
                </span>
            </Circle>
        </div>
    )
}

export default ProgressGraphic