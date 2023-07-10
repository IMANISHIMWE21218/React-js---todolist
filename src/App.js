import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewListTask] = useState("");

  const handleChanges = (event)=>{
      setNewListTask(event.target.value);
  };

  const addTask = () =>{
    const task = {
      id: todoList.length===0 ? 1: todoList[todoList.length-1].id +1 ,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task])               // const newTaskAdd = [...todoList, newTask];
  }

  const deleteTask = (id) =>{
    setTodoList(todoList.filter((task)=> task.id !== id));   // we replaced if else that returned false or true  with !== condition the alse by default return true or false
  }

  const completeTask = (id) => {
    setTodoList(todoList.map((task) =>{
      if(task.id === id){
        return  {...task, completed: true}
      }else{
        return task;
      }
    }));
  };
    
  return (
    <div className="App">
     <div className="addTask">
      <input placeholder='Type her .....' className='task' onChange={handleChanges}/> 
      <button className='taskbutton' onClick={addTask}>Add Task</button>
     </div>

     <div className="list">
        {todoList.map((task)=>{
          return (
            <Task 
          taskName = {task.taskName}
          id= {task.id} 
          completed={task.completed}
          deleteTask = {deleteTask} 
          completeTask= {completeTask}/>
          );
          // return (
          //   <Task
          //     taskName={task.taskName}
          //     id={task.id}
          //     ??? comp
          //     deleteTask={deleteTask}
          //     completeTask={completeTask}
          //   />
          // );
        })}
     </div>
    </div>
  );
}

export default App;
