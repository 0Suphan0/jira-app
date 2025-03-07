import { useState } from "react";
import TaskCreate from "./TaskCreate";
import {useContext} from 'react'
import TasksContext from '../context/task'

function TaskShow({task}) {

  const {editTaskById,deleteByTaskId} = useContext(TasksContext);


  const [showEdit, setShowEdit] = useState(false)


  const handleClick = () =>{
    //  onDelete(task.id);
    deleteByTaskId(task.id);
  }

  const handleEdit = () =>{
      setShowEdit(!showEdit)
  }

  const handleSubmit = (id,updatedTitle,updatedTaskDesc) =>{
      setShowEdit(false)
      editTaskById(id,updatedTitle,updatedTaskDesc)

  }

  

    return ( 
      <div className="task-show">

        {showEdit?
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
        :
        <div>
        <h3 className="task-title">Göreviniz</h3>
        <p>{task.title}</p>
        <h3 className="task-title">Yapılacaklar</h3>
        <p>{task.description}</p>

        <div>
        <button className="btn-delete" onClick={handleClick}>Sil</button>
        <button className="btn-edit" onClick={handleEdit}>Güncelle</button>
        </div>
          </div>}
        

      </div>
     );
}

export default TaskShow;