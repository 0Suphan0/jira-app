import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {

 const [tasks, setTasks] = useState([])

 const createTask = (title,description) =>{

  const createdTask=[
    ...tasks,{
      id:Math.round(Math.random()*9999),
      title:title,
      description:description
    }
  ]

  setTasks(createdTask);

  console.log(createdTask);

 }

 const deleteByTaskId = (id) => {
   const afterDeletion=tasks.filter((task)=>{
    return task.id !==id;
   })

   setTasks(afterDeletion);
 }

 const editTaskById = (id,updatedTitle,updatedTaskDesc) => {
  
  const updatedTask=tasks.map((task)=>{

    if(id===task.id){
      return {
        id:id,
        title:updatedTitle,
        description:updatedTaskDesc
      }
      
    }

   return task;
  })

  setTasks(updatedTask);
}

  return (
    <>
    <div className='appDiv'>
      <TaskCreate onCreate={createTask}/>
      <h1 className='tasksHeader'>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteByTaskId} onUpdate={editTaskById}/>
      </div>

    </>
    
  )
}

export default App
