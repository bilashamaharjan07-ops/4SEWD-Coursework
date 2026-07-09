import "./TaskItem.css";

function TaskItem({task, index}){
    return (
     <li
      key={index}
      className={task.isUrgent ? "urgent-task" : ""}
      style={{ listStyle: "none" }}
    >
      <span>{task.deadline}</span> - <span>{task.title}</span>
    </li>
  );
}
export default TaskItem;