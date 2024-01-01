import { useEffect, useState } from "react"
import { useTaskContext } from "../../context/TaskContext"
import Circle from "./Circle"
import Bar from "./Bar"

const ProgressGraphic = () => {

    const {tasks} = useTaskContext()
    const [percentege, setPercentege] = useState<number>(0)
    const doneTasks = tasks.filter(task => task.status)

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
        <div className=" bg-gray-600 p-4 w-full lg:w-fit h-fit rounded-2xl lg:absolute lg:right-[-164px] lg:opacity-1 flex justify-center items-center">
            {
                window.innerWidth > 1024 ? (
                    <Circle per={percentege}>
                        <span className="text-2xl text-gray-100 font-bold bg-gray-600 w-[70%] h-[70%] rounded-full flex justify-center items-center"> 
                        {doneTasks.length}/{tasks.length}
                        </span>
                    </Circle>
                ) : (
                    <>
                        <Bar value={percentege} />
                    </>
                )
            }
        </div>
    )
}

export default ProgressGraphic