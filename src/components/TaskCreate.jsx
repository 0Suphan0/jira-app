function TaskCreate() {
    return ( <>
    <div className="formDiv">
    <h3 className="addTaskHeader">Lütfen Task Ekleyiniz</h3>
    <form>
        <label className="lbl">Başlık</label>
        <input className="input"/>
        <label className="lbl">Task Giriniz</label>
        <textarea className="input"></textarea>
        <button className="btn">Ekle</button>
    </form>
    </div>
    </> );
}

export default TaskCreate;