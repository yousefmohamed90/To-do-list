import { useRef, useState } from 'react'
import './App.css'
function App() {
  const [tasks,setTasks]=useState([]);
  const inputref=useRef();
  const addTask=()=>{
    const task=inputref.current.value;
    const newItem={completed:false,task};
    setTasks([...tasks,newItem]);
    inputref.current.value="";
  }
const handleItemdone=(index)=>{
 const newtasks=[...tasks];
 newtasks[index].completed=!newtasks[index].completed;
  setTasks(newtasks);
}
const handleDelete=(index)=>{
const newtasks=[...tasks];
newtasks.splice(index,1);
setTasks(newtasks);
}
 return(
  <>
  <div className="App">
<h2 className='h2befdiv'>To Do List</h2>
<div className="container">
<input  type="text" placeholder ="Add a new task" ref={inputref} />
<button onClick={addTask}>Add</button>
<ul>
{tasks.map((item,index)=>{
return <div className="flex-container">
  <li className={item.completed ? "done" : "" } key={index} onClick={()=>handleItemdone(index)}>{item.task}</li>
<span onClick={()=>handleDelete(index)} className='delete'>Delete Task</span>
</div>
 })}
</ul>
  </div>
  </div>
  </>
  )
}
export default App