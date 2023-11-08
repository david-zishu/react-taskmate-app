// import Count from "./components/Count";
import Tasks from "./components/Tasks";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { useState } from "react";
import "./App.css";

export const App = () => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);
  const taskLength = tasks.length;

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} onAddTask={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} taskLength={taskLength} />
      </main>
      <Footer />
    </div>
  );
};
