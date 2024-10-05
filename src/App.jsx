import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios';

function App() {

 const [tasks, setTasks] = useState([])

 const createTask = async (title,description) =>{

  const response = await axios.post("http://localhost:3000/tasks",{
    title:title,
    description:description
  });

  
  console.log(response)

  const createdTask=[
    ...tasks,
    response.data
  ]

  setTasks(createdTask);

  console.log(createdTask);

 }

 useEffect(()=>{
  fetchTasks();
 },[])

 const fetchTasks = async () =>{

  const response = await axios.get("http://localhost:3000/tasks");
  setTasks(response.data);

}

 const deleteByTaskId = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
   const afterDeletion=tasks.filter((task)=>{
    return task.id !==id;
   })

   setTasks(afterDeletion);
 }

 const editTaskById = async(id,updatedTitle,updatedTaskDesc) => {

  await axios.put(`http://localhost:3000/tasks/${id}`,{
    title:updatedTitle,
    description:updatedTaskDesc
  })

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
