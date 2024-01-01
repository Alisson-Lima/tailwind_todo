import "./Bar.css"
import { useTaskContext } from "../../context/TaskContext"

type BarProps = {
    value: number,
}

const Bar = ({value}: BarProps) =>{

    const {tasks} = useTaskContext()
    const doneTasks = tasks.filter(task => task.status)

    return(
        <>
            <progress
                className={`progress text-gray-100 w-full h-2 rounded-full block bg-gray-200 ${value === 100 ? "complete" : ""}`}
                value={value}
                max="100"
            />
            <span className="text-gray-100 w-16 text-right font-semibold text-md gap-1 flex justify-end items-center">
                {doneTasks.length} / <span className=" text-gray-100">{tasks.length}</span>
            </span>
        </>
    )
}

export default Bar