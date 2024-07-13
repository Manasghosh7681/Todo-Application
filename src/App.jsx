import './App.css'
import {useState} from "react"
function App() {

  const [todo,setTodo]=useState("")
  const [todoArray,setTodoArray]=useState([])
 
  function pushData()
  {
    let todoObj=
    {
      id:Math.random()+Date.now()+todo,
      todo:todo,
      isCompleted:false,
      color: 'black'
    }
    setTodoArray([...todoArray,todoObj]);
    console.log(todoArray);
  }
  function updateData(id)
  {
    console.log(id);
    let updateArray=todoArray.map((el)=>{
     return el.id==id?{...el,isCompleted:!el.isCompleted,color:el.isCompleted?'black':'pink'}:el
      
  })
    setTodoArray(updateArray);
    
  }
  function DeleteData(id)
  {
    let newArray=todoArray.filter((el)=>(el.id!=id))
    setTodoArray(newArray);
  }
  return (
    <div>
    <input id="inp" type="text" placeholder='Enter Task' onChange={(ev)=>{setTodo(ev.target.value)}} />
    <button onClick={pushData}>set Todo</button>
    
    
    {
      todoArray.map((el)=>(
        <div id="height">
        <h1 >{el.todo}</h1>
        <h1 style={{color:el.color}}>{el.isCompleted?"Task completed":"Task is not complete"}</h1>
        <button onClick={()=>{updateData(el.id)}}>update</button>
        <button onClick={()=>{DeleteData(el.id)}}>Delete</button>
        </div>
      ))
     
    }
    </div>
  )
}

export default App
