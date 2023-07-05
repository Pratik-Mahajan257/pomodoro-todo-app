import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Layout from '../components/Layout';

const List = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const taskCount = tasks.length; // Get the count of tasks

  return (
    <div className="flex flex-col justify-start items-center bg-yellow-300 h-screen">
      {/* Display the task count instead of "Todo App" */}
      <h1 className="text-2xl font-bold mb-4 bg-yellow-100 p-3 mt-10 rounded-xl">
        {taskCount} {taskCount === 1 ? 'Task' : 'Tasks'} Addedd
      </h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
      <Layout />
    </div>
  );
};

export default List;
