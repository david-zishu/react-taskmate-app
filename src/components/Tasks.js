import { useState } from "react";
import { TaskCard } from "./TaskCard";
// import { BoxCard } from "./BoxCard";
import "./Tasks.css";

function Tasks({ tasks, setTasks, taskLength }) {
  const [show, setShow] = useState(true);

  // const headingStyles = {
  //   color: show ? "#3d8361" : "#be3434",
  //   border: "2px solid",
  //   borderColor: show ? "#3d8361" : "#be3434",
  //   padding: "20px",
  //   borderRadius: "5px",
  // };

  function handleDelete(id) {
    console.log(id);
    setTasks(tasks.filter((task) => id !== task.id));
  }

  return (
    <section className="tasks">
      {/* <h1 style={headingStyles}>Task List</h1> */}
      {taskLength > 0 ? (
        <ul>
          <div className="header">
            <h1>TaskList</h1>
            <button className="trigger" onClick={() => setShow(!show)}>
              {show ? "Hide Task" : "Show Task"}
            </button>
          </div>
          {show &&
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} onDelete={handleDelete} />
            ))}
        </ul>
      ) : (
        <p className="empty">No Data Available</p>
      )}

      {/* <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vel!
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vel!
        </p>
      </BoxCard> */}

      {/* <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vel!
        </p>
      </BoxCard> */}
    </section>
  );
}

export default Tasks;
