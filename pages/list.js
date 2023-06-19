import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Layout from '../components/Layout';
const list = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    
    <div>
      {/* Your notifications component content goes here */}
     <h1 className="text-2xl font-bold mb-4 bg-white">Todo App</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
      <Layout />
    </div>
  );
};

export default list;
