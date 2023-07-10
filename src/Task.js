
import './App.css';
export const Task = (props) =>{
    return(
        <div className="task" style={{backgroundColor: props.completed ? "#85929E" : "white"}}>
            <h2>{props.taskName}</h2>
            <button className='btn' onClick={()=>props.deleteTask(props.id)}>delete</button>
            <button className='btn' onClick={() => props.completeTask(props.id)}>complete</button>
           </div>
        
    );
}