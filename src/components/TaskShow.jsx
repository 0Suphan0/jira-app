function TaskShow({task}) {
    return ( 
      <div className="task-show">
        <h3 className="task-title">Göreviniz</h3>
        <p>{task.title}</p>
        <h3 className="task-title">Yapılacaklar</h3>
        <p>{task.description}</p>

        <div>
        <button className="btn-delete">Sil</button>
        <button className="btn-edit">Güncelle</button>
        </div>

      </div>
     );
}

export default TaskShow;