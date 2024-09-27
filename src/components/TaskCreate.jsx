import { useState } from "react";


function TaskCreate({onCreate}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title,description);
        setTitle('');
        setDescription('');
    }

    return ( <>
    <div className="formDiv">
    <h3 className="addTaskHeader">Lütfen Task Ekleyiniz</h3>
    <form>
        <label className="lbl">Başlık</label>
        <input className="input" value={title} onChange={handleTitleChange}/>
        <label className="lbl">Task Giriniz</label>
        <textarea className="input" value={description} onChange={handleDescriptionChange} rows={5}></textarea>
        <button className="btn" onClick={handleSubmit}>Ekle</button>
    </form>
    </div>
    </> );
}

export default TaskCreate;