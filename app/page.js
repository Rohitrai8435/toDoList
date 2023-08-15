"use client"

import "bootstrap/dist/css/bootstrap.css"

  import React ,{useState}from 'react'
import CreateTask from "./CreateTask"
import ShowTask from "./ShowTask"
import Link from "next/link"

  
  export default function page() {
    const [title,settitle]=useState("");
  const [discription,setDiscription]=useState("");
  const [status,setStatus]=useState("due");
  const [tasks,setTasks]=useState([]);
  const[activeTask,setActiveTask]=useState(null);
  const submitHandler=(event)=>{
    event.preventDefault();
    const newtask = {
      date: new Date().toLocaleDateString(),
      title,
      discription,
      status,
  };
  setTasks([...tasks,newtask]);
  settitle("");
  setDiscription("");
  setStatus("due");
  }
  
  const updateHandler=(index)=>{
   
    const { title, discription, status } = tasks[index];
    settitle(title);
    setDiscription(discription);
    setStatus(status);
    setActiveTask(index);
  };
  
  
  const UpdateTask = (e) => {
   
    e.preventDefault();
    const copyTasks = [...tasks];
    copyTasks[activeTask] = {
        ...copyTasks[activeTask],
        title,
        discription,
        status,
    };
    setTasks(copyTasks);
    setActiveTask(null);
    settitle("");
    setDiscription("");
    setStatus("due");
};
const deliteHandler=(index)=>
{  
  setTasks(tasks.filter((elm,i)=>i!==index))}
  
    return (
      <>
      <CreateTask
        tasks={tasks}
        setTasks={setTasks}
        title={title}
        settitle={settitle}
        discription={discription}
        setDiscription={setDiscription}
        status={status}
        setStatus={setStatus}
        activeTask={activeTask}
        setActiveTask={setActiveTask}
        submitHandler={submitHandler}
        UpdateTask={UpdateTask}
       
      />
      <ShowTask
       tasks={tasks}
       updateHandler={updateHandler}
       deliteHandler={deliteHandler}
      />
     </>
    )
    }
  
  
