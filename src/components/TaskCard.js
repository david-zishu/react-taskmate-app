import "./TaskCard.css";
// import styles from "./TaskCard.module.css";

export const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="taskcard">
      <li className={task.completed ? "completed" : "incomplete"}>
        <span>
          {task.id} - {task.name}
        </span>
        <button onClick={() => onDelete(task.id)} className="delete">
          Delete
        </button>
      </li>
    </div>
  );
};
