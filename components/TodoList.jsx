const TodoList = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="mt-4">
      {tasks.map((task, index) => (
        <li key={index} className="flex items-center py-4 rounded-xl justify-between bg-emerald-400 w-screen">
          <span className="ml-2">{task}</span>
          <button
            onClick={() => onDeleteTask(index)}
            className="bg-red-600 p-2 rounded-lg mr-2"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
