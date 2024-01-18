import React, { useState } from 'react'

export default function TasksCard({title}) {
  const [completedChecked , setCompletedChecked] = useState(false);
   const handleOnDragStart=()=>{
    console.log("Dragging !");
   }
   const handleOnDragEnter=()=>{
    console.log("Dragging Entered  !");
   }
   const handleOnDragEnd = ()=>{
    console.log("Drag has ended")
   }

  return (
    <div className='p-4 bg-primary-dark   flex align-center gap-4 border-white border  ' draggable onDragStart={handleOnDragStart} onDragEnter={handleOnDragEnter}>
        <div className="p-4 cursor-move">
            <div className="w-4 bg-primary-light h-[0.5px] "></div>
            <div className="w-4 bg-primary-light h-[0.5px] mt-1"></div>
        </div>
        <h3 className='text-3xl text-white'>{title}</h3>
        <input type='checkbox' className='ml-auto accent-primary-light h-5 w-5 mt-2 ' checked={completedChecked} onChange={(e)=>{setCompletedChecked(prev=>!prev)}}/>
    </div>
  )
}
