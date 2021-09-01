export default function ToDoList({toDos, type, toggleStatus, handleDelete, handleEdit}){
    const list = toDos.map(toDo => {
            const removeTask = toDo.completed ? <button className="remove-item" value={toDo.id} onClick={(e) => handleDelete(e)}>X</button> : null
      return (
        <div name={toDo.id} key={toDo.id} className="list-item card">
          <div className="task"  onDoubleClick={() => handleEdit(toDo.id)}>
            {toDo.task}
          </div>
          <button className="change-item" onClick={() => toggleStatus(toDo.id)}>Change Status</button>
          {removeTask}
        </div>
      )
    })
    return (
      <div className="list-box">
      <h2>{type}</h2>
      {list}
      </div>
    )
  }