import React from 'react'
import TasksCard from './TasksCard'

export default function Tasks({tasks,dispatch}) {
  return (
    <div className='md:bg-secondary-dark min-h-96 max-h-[80vh] overflow-y-scroll no-scrollbar py-8 rounded-lg flex flex-col gap-4 md:px-8'>

    {tasks.map((task,index)=>{
        return <TasksCard title={task.title} index={index}  dispatch={dispatch} isCompleted={task.isCompleted} />
    })}
    {/* <TasksCard title="First Task" index="1"/> */}
    

    </div>
  )
}
