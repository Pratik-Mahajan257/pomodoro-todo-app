const TodoList = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="mt-4">
      {tasks.map((task, index) => (
        <li key={index} className="flex items-center">
          <span className="mr-2">{task}</span>
          <button
            onClick={() => onDeleteTask(index)}
            className="text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
