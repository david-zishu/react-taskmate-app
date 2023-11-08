import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, onAddTask }) => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);

  function handleTask(event) {
    setTask(event.target.value);
  }

  function handleReset() {
    setTask("");
    setStatus(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: task,
      completed: Boolean(status),
    };
    onAddTask([...tasks, newTask]);
    handleReset();
  }

  function handleSelect(e) {
    setStatus(e.target.value);
  }

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Task Name..."
          id="task"
          name="task"
          value={task}
          onChange={handleTask}
        />
        <select onChange={handleSelect} value={status}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <span className="reset" onClick={handleReset}>
          Reset
        </span>
      </form>
    </section>
  );
};
