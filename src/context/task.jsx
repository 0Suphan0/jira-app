import  {createContext } from 'react';
import { useState } from 'react';
import axios from 'axios';


const TasksContext = createContext();

function Provider({children}){

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
      };
      
      const sharedValuesAndMethods={
        tasks,
        createTask,
        fetchTasks,
        editTaskById,
        deleteByTaskId
      };

    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

export {Provider};
export default TasksContext;    