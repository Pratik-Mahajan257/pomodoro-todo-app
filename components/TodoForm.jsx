import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
const TodoForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div className='bg-yellow-100 rounded-lg flex justify-center items-center '>

    <form onSubmit={handleSubmit} className='flex justify-center items-center'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        className="border outline-none border-gray-300 bg-transparent border-none rounded-lg px-4 w-[350px] h-24  py-2 "
      />
      <button
        type="submit"
        className="text-white rounded-lg px-5 py-8   "
      >
        <AiOutlinePlus size={40} className='text-orange-500 text-4xl font-bold '/>
      </button>
    </form>
    </div>
  );
};

export default TodoForm;
