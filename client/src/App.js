import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import ToDoForm from './components/ToDoForm'
import Container from './components/Container'

export default function App() {
    const [toDo, setToDo] = useState({ task: '', completed: false })
    const [toDos, setToDos] = useState([
        { id: 1, task: "Go grocery shopping", completed: false },
        { id: 2, task: "Buy snacks", completed: true },
    ])
    let newTaskId = toDos.length +1

 
    // useEffect(() => {console.log(toDo.task)})
    const handleToDo = ({id, value})=> {
               setToDo({...toDo, id:id, task: value})
    }

    function handleDelete(e) {
        let toDosLocal = [...toDos]
        const val = e.target.parentElement.attributes[0].value
        let targetToDo = toDosLocal.filter(toDo => {
            let t
            if (toDo.id == val){ 
                return t = toDo
            }
            return t
        })
        let index = toDosLocal.indexOf(targetToDo[0])
        toDosLocal.splice(index,1)

        return setToDos(toDosLocal)
  };
    


    function handleSubmit(event) {
        event.preventDefault()
        setToDos([...toDos, toDo])
        setToDo({ task: '', completed: false })
    }

    function handleEdit(id) {
        console.log('edit me', id)
            /*
             */
    }
    //https://www.robinwieruch.de/react-update-item-in-list
    function toggleStatus(id) {
        const updatedToDos = toDos.map(toDo => {
            if (toDo.id === id) {
                return {...toDo, completed: !toDo.completed }
            } else {
                return toDo
            }
        })
        setToDos(updatedToDos)
    }

    return ( 
    <div className="container">
     <Header />
         <ToDoForm 
         handleToDo={handleToDo} 
         handleSubmit={handleSubmit} 
         toDo={toDo}
         newTaskId={newTaskId} />
         <Container 
         toDos={ toDos } 
         toggleStatus={ toggleStatus } 
         handleDelete={ handleDelete } 
         handleEdit={ handleEdit} />
    </div>
    );
}