import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Home() {
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
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
