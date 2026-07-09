import TaskItem from "../../TaskItem/TaskItem";
import "./TaskContainer.css";
import { useState } from "react";
export function TaskContainer() {
const[isTaskFiltered, setisTaskFiltered]= useState(false);
  let taskList = [
    { deadline: "9:00 AM", title: "Complete task 1", isUrgent: true },
    { deadline: "9:05 AM", title: "Complete task 2", isUrgent: false },
    { deadline: "9:10 AM", title: "Complete task 3", isUrgent: false },
    { deadline: "9:20 AM", title: "Complete task 4", isUrgent: true },
    { deadline: "9:30 AM", title: "Complete task 5", isUrgent: false },
  ];
  if (isTaskFiltered){
    taskList=taskList.filter((task)=> task.isUrgent)
  }

  if (taskList.length === 0) {
    return <h2>No pending tasks</h2>;
  }

  const taskListJSX = taskList.map((item, index) => (
    <TaskItem task={item} index={index}/>
  ));

  return (
    <>
      <h2>Tasks due today</h2>
      <button onClick={()=> setisTaskFiltered(!isTaskFiltered)}>Filter</button>
      <ul>{taskListJSX}</ul>
    </>
  );
}