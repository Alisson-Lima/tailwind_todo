// import React from 'react';

import { useContext } from "react";
import { SistemMessageContext } from "../../context/SistemMessageContext";

const SistemMessage = () => {

  const smContextValue = useContext(SistemMessageContext)

  const handleClose = ()=>{
    smContextValue?.setSm({type: "", msg: ""})
  }

  const typeMessage = smContextValue?.sm.type
  const message = smContextValue?.sm.msg

  return (
    
        <div
          data-type={typeMessage}
          className={`data-[type=ERROR]:bg-red data-[type=ALERT]:bg-yellow-300 data-[type=SUCCESS]:bg-green rounded-lg p-2 px-4 text-md font-semibold flex gap-4 justify-between w-72 transition-all ${message !== "" ? "opacity-1 scale-1" : "opacity-0 scale-75"} fixed top-12`}
        >
          <p
            className=" w-48 h-[50px]"
          >{message}</p>

          <button
            className="p-1 group"
            onClick={handleClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className=" group-hover:fill-gray-600 transition-colors">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.584 1H5.915C2.894 1 1 3.139 1 6.166V14.334C1 17.361 2.885 19.5 5.915 19.5H14.583C17.614 19.5 19.5 17.361 19.5 14.334V6.166C19.5 3.139 17.614 1 14.584 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path className="group-hover:stroke-red transition-colors duration-200" d="M12.645 7.84473L7.853 12.6367" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path className="group-hover:stroke-red transition-colors duration-200" d="M12.6465 12.6398L7.85049 7.84277" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      
    
  );
}


export default SistemMessage