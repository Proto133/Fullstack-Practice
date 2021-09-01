import ToDoList from '../components/ToDoList'

export default function Container({toDos, toggleStatus, handleDelete, handleEdit}){
  const completed = toDos.filter(toDo => toDo.completed)
  const incomplete = toDos.filter(toDo => !toDo.completed)
  return (
    <div className="list">
        <ToDoList toDos={incomplete} type={'Incomplete'} toggleStatus={toggleStatus} handleEdit={handleEdit} handleDelete={handleDelete} />
        <ToDoList 
            toDos={completed} 
            type={'Completed'} 
            toggleStatus={toggleStatus} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit}
        />
    </div>
    )
}