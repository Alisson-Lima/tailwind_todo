import React, { useState } from 'react'

const AddTask = () => {

  const [task, setTask] = useState<string>("")


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if(task.trim() === ""){
      console.log("Você não pode adicionar uma tarefa vazia")
      return
    }

    console.log(task)
    // Add task in tasks array...
    // dispatch({type: "add_task", task})

    setTask("")
    
  }

  return (
    <div className="add_task bg-gray-600 text-gray-100 p-6 rounded-2xl">
    <h2 className="mb-7 font-bold text-2xl font-lato">Digite sua tarefa</h2>
    <form onSubmit={e => handleSubmit(e)} className=" gap-4 flex">

      <input
        onChange={(e)=> setTask(e.target.value)} 
        value={task}
        type="text"
        placeholder="Sair com os pets..."
        className=" max-w-[344px] w-full p-2 text-xl bg-transparent border-b-4 border-gray-400 placeholder:text-gray-300 outline-none focus:border-purple transition-colors"
      />
      <button 
        className="min-w-12 min-h-12 rounded-lg flex items-center justify-center bg-purple hover:brightness-[1.1] transition-all duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path d="M19.4735 10.1544C19.4828 9.4377 19.0946 8.77898 18.4641 8.43324L3.77226 0.361095C3.11421 -0.0108174 2.33848 0.0348746 1.7184 0.458296C1.08695 0.888848 0.763747 1.91379 0.940267 2.65406L2.31182 8.40033C2.45262 8.98956 2.97998 9.40445 3.58668 9.40186L11.7627 9.3765C12.1814 9.3681 12.5209 9.70765 12.5125 10.1263C12.5112 10.5379 12.1767 10.8724 11.758 10.8808L3.57423 10.8998C2.96753 10.901 2.43759 11.3178 2.29313 11.9079L0.873079 17.677C0.700663 18.3588 0.897237 19.0394 1.37827 19.5204C1.43486 19.577 1.49852 19.6406 1.56223 19.6901C2.18518 20.1707 3.00102 20.232 3.69757 19.8609L18.4393 11.8677C19.0719 11.5323 19.4642 10.8711 19.4735 10.1544Z" fill="#CED5F0"/>
        </svg>
      </button>
    </form>
  </div>
  )
}

export default AddTask