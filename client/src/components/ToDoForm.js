export default function ToDoForm({handleToDo, handleSubmit, toDo, newTaskId}){
  console.log(`newTaskId: ${newTaskId}`);
    return (
      <div className="searchForm search-card">
        <h2>What would you like to add?</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={(event) => handleToDo({id:newTaskId , value:event.target.value})} value={toDo.task}/>
          <button type="submit" onClick={handleSubmit}> Add Task </button>
        </form>
      </div>
    )
  }