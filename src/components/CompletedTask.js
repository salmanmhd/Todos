import { useContext } from 'react';
import TaskList from './TaskList';
import { TaskContext } from '../App';

function CompletedTask() {
  const { tasks, onClearCompletedTask } = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <div>
      <div className='flex'>
        <p className='text-xl '>Completed Task</p>
        <button
          onClick={onClearCompletedTask}
          className='ml-24 font-thin text-lg bg-red-500 text-white rounded-lg px-2'
        >
          clear completed
        </button>
      </div>
      <TaskList tasks={completedTasks} />
    </div>
  );
}

export default CompletedTask;
