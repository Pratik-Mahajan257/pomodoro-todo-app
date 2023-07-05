import { useState, useEffect } from 'react';
import { AiFillDelete, AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TodoList = ({ tasks, onDeleteTask }) => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    setTimers(tasks.map(() => ({ timeRemaining: 25 * 60, isRunning: false })));
  }, [tasks]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        return prevTimers.map((timer) => {
          if (timer.isRunning && timer.timeRemaining > 0) {
            return { ...timer, timeRemaining: timer.timeRemaining - 1 };
          }
          return timer;
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const startTimer = (index) => {
    setTimers((prevTimers) => {
      const updatedTimers = [...prevTimers];
      updatedTimers[index] = { ...updatedTimers[index], isRunning: true };
      return updatedTimers;
    });
  };

  const pauseTimer = (index) => {
    setTimers((prevTimers) => {
      const updatedTimers = [...prevTimers];
      updatedTimers[index] = { ...updatedTimers[index], isRunning: false };
      return updatedTimers;
    });
  };

  const resetTimer = (index) => {
    setTimers((prevTimers) => {
      const updatedTimers = [...prevTimers];
      updatedTimers[index] = { ...updatedTimers[index], timeRemaining: 25 * 60 };
      return updatedTimers;
    });
  };

  return (
    <ul className="mt-4 flex flex-col justify-between items-center">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex items-center py-4 rounded-xl justify-between bg-emerald-200 border-2 border-emerald-600 lg:w-[800px]  w-screen"
        >
          <div className="flex items-center ml-3">
            {timers[index]?.isRunning ? (
              <button onClick={() => pauseTimer(index)} className="bg-green-300  p-2 rounded-lg mr-2">
                <AiFillPauseCircle className="text-green-800" />
              </button>
            ) : (
              <button onClick={() => startTimer(index)} className="bg-green-300 p-2 rounded-lg mr-2">
                <AiFillPlayCircle className="text-green-800" />
              </button>
            )}
            <span className="ml-2">{task}</span>
          </div>
          <div className="flex items-center">
            <div style={{ width: '40px', height: '40px' }}>
              <CircularProgressbar
                value={timers[index]?.timeRemaining}
                maxValue={25 * 60}
                text={`${Math.floor(timers[index]?.timeRemaining / 60)
                  .toString()
                  .padStart(2, '0')}:${(timers[index]?.timeRemaining % 60)
                  .toString()
                  .padStart(2, '0')}`}
                strokeWidth={10}
                styles={buildStyles({
                  textSize: '25px',
                  pathColor: '#4CAF50',
                  textColor: '#4CAF50',
                  trailColor: '#D9D9D9',
                })}
              />
            </div>
            <button onClick={() => onDeleteTask(index)} className="ml-3 bg-red-300 p-2 rounded-lg mr-2">
              <AiFillDelete className="text-red-800" />
            </button>
            {/* {timers[index]?.isRunning ? (
              <button onClick={() => pauseTimer(index)} className="bg-yellow-300 p-2 rounded-lg">
                Pause
              </button>
            ) : (
              <button onClick={() => resetTimer(index)} className="bg-blue-300 p-2 rounded-lg">
                Reset
              </button>
            )} */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
