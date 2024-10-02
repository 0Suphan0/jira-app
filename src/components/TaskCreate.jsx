import { useState } from "react";


function TaskCreate({onCreate,task,taskFormUpdate,onUpdate}) {

    const [title, setTitle] = useState(task!=null?task.title:'');
    const [description, setDescription] = useState(task!=null?task.description:'');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(taskFormUpdate){
            onUpdate(task.id,title,description)
        }else{
            onCreate(title,description);
        }
        setTitle('');
        setDescription('');
    }

    return ( 
    <div>
    {taskFormUpdate?
    <div className="task-update">
    <h3 className="addTaskHeader">Lütfen Task'ı Düzenleyiniz.</h3>
    <form>
        <label className="lbl">Başlığı Düzenleyiniz</label>
        <input className="input" value={title} onChange={handleTitleChange}/>
        <label className="lbl">Task'ı Düzenleyiniz</label>
        <textarea className="input" value={description} onChange={handleDescriptionChange} rows={5}></textarea>
        <button className="btn update-btn" onClick={handleSubmit}>Düzenle</button>
    </form>
    </div>
    :
    <div className="task-create">
    <h3 className="addTaskHeader">Lütfen Task Ekleyiniz</h3>
    <form>
        <label className="lbl">Başlık</label>
        <input className="input" value={title} onChange={handleTitleChange}/>
        <label className="lbl">Task Giriniz</label>
        <textarea className="input" value={description} onChange={handleDescriptionChange} rows={5}></textarea>
        <button className="btn" onClick={handleSubmit}>Ekle</button>
    </form>
    </div>}

    </div>
     );
}

export default TaskCreate;