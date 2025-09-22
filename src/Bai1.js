import { useState } from "react";

function CV({ name, onDelete }) {
  return (
    <li>
      {name} 
      <button onClick={onDelete}>Xóa</button>
    </li>
  );
}

function App() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]); 
    setTask("");
  };

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={addTask}>Thêm</button>

      <ul>
        {tasks.map((t, index) => (
      <CV 
        key={index} 
        name={t} 
        onDelete={() => setTasks(tasks.filter((_, i) => i !== index))} 
    />
  ))}
</ul>

    </div>
  );
}

export default App;
