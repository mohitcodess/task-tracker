import Tasks from './Components/Tasks'
import './App.css'
import { useEffect, useReducer, useState } from 'react'
import Filter from './Components/Filter'

function App() {
  const [newTask , setNewTask] = useState("")
  const [isAddModalOpen,setIsAddModalOpen] = useState(false);
  const [tasks,dispatch] = useReducer(tasksReducer , []);
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [tasksOnFilter,setTasksOnFilter] = useState([]);
  const filterCategories = ["All","Completed","Pending"];
  
  function tasksReducer (state,action){
    switch (action.type){
      case 'ADD':
        
        
        const updatedState =[
          ...state,
          {
            title:action.title,
            isCompleted:false
          }
        ]
        localStorage.setItem("tasks",JSON.stringify({'allTasks':[...updatedState]}));
        return updatedState 
        
      case 'COMPLETED':
        // Logic to mark as done
        break;
      case 'DELETE':
        // Logic to Delete
        break
      case 'SET':
        return action.allTasks.map((t,index)=>{
          t.id=index;
          return t;
        });
        
      default:
        //default state


    }
    
  }
  const handleAddButtonOnClick = ()=>{
    setIsAddModalOpen(true);

  }
  const handleCloseButtonOnClick = ()=>{
    setIsAddModalOpen(false);
  }

  const handleContinueOnClick = ()=>{
    dispatch({type:'ADD' , title:newTask})
    setNewTask("");
    handleCloseButtonOnClick();
  }
  useEffect(()=>{
    if (!localStorage.getItem("tasks") ) {
      localStorage.setItem('tasks',JSON.stringify({
        allTasks:[]
      }));
      return;
    }
    const allTasks =JSON.parse(localStorage.getItem("tasks")).allTasks;
    dispatch({
      type:'SET',
      allTasks
    })
    setTasksOnFilter([...allTasks]);
    
  },[]) 

  useEffect(()=>{
    if(selectedFilter==='All') setTasksOnFilter([...tasks]);
    else if (selectedFilter==='Completed') setTasksOnFilter(tasks.filter(t=>t.isCompleted));
    //set for pending state 
    else setTasksOnFilter(tasks.filter(t=>!t.isCompleted));

  },[selectedFilter,tasks]  )
  return (
    <div className={`h-screen bg-black flex flex-col md:flex-row md:p-8 md:justify-around text-primary-light ` }>
      {/* heading */}
      <h1 className={`font-popins text-6xl p-8 text-primary-light italic ${isAddModalOpen && "hidden"} md:text-9xl`} >Track <span className='md:block md:mt-4'>Your</span>  <div className='mt-4'>Tasks</div> </h1>

      {!isAddModalOpen  && <div className=" md:relative">

        <div className="flex gap-4 md:mt-4   p-4">
          {filterCategories.map(category=><Filter title={category} tasks={tasksOnFilter} isSelected={selectedFilter===category} onClick={()=>{setSelectedFilter(category)}}/>)}
        </div>
        <Tasks tasks={tasksOnFilter} />
        </div>}

       

      
      
      <button className={`fixed rounded-full p-3 px-5 bottom-8 right-8 bg-primary-light text-4xl text-white  ${isAddModalOpen && "hidden"} `} onClick={handleAddButtonOnClick}>+</button>
      {/* MODAL */}
      <div className={`absolute flex flex-col  text-white gap-12 border-2  border-primary-dark py-12  px-8 rounded-md bottom-1/3 md:w-1/2 ${!isAddModalOpen && "hidden"}`}>
        <div className="text-4xl text-primary-light italic font-popins  " >Add a new Task !</div>
        <input type="text" placeholder='New task' className='bg-transparent h-4 border-white border-2 p-8 text-xl ' value={newTask} onChange={(e)=>{setNewTask(e.target.value)}} />
        <button className='text-white bg-primary-light w-1/3  p-2 rounded-2xl ml-auto text-xl  ' onClick={handleContinueOnClick}>Continue</button>

        <button className='absolute text-white right-2 top-2' onClick={handleCloseButtonOnClick}>  X </button>
      </div>


    </div>
  )
}

export default App
