import { useEffect, useState } from "react"
import { useTaskContext } from "../../context/TaskContext"
import Circle from "./Circle"
import Bar from "./Bar"
import { useToggleGraphic } from "../../context/ToggleGraphicContext"

const ProgressGraphic = () => {

    const {tasks} = useTaskContext()
    const [percentege, setPercentege] = useState<number | typeof NaN>(0)
    const doneTasks = tasks.filter(task => task.status)
    const {openGraphic} = useToggleGraphic()

    const getPercentege = () =>{

        const total = tasks.length
        const done = tasks.filter(tasks => tasks.status === true).length
        if(!(total === 0 && done === 0)){
            const percentegeDone = (done / total) * 100
            setPercentege(parseFloat(percentegeDone.toFixed(0)))
            return
        }
        setPercentege(0)

    }

    useEffect(()=>{
        getPercentege()
    }, [tasks])

    useEffect(()=>{
        getPercentege()
    },[])  

    return (
        <div className={`bg-gray-600 p-4 w-full relative lg:w-fit h-fit rounded-2xl lg:absolute lg:right-[-164px] flex justify-center items-center ${!openGraphic && "opacity-0 scale-90 lg:right-[-152px]"} transition-all`}>
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