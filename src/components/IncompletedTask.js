import { useContext, useState } from 'react';
import TaskList from './TaskList';
import { TaskContext } from '../App';

function IncompletedTask() {
  const [sortBy, setSortBy] = useState('input');
  const { tasks } = useContext(TaskContext);
  const incompletedTasks = tasks.filter((task) => !task.isCompleted);
  return (
    <>
      <p className='text-xl mt-9'>To Do</p>
      <select
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        className='border-black bg-blue-300 rounded-lg mt-4 border-x-1 p-2 mb-4 block w-30 ml-6'
      >
        <option value='input'>sort by input</option>
        <option value='priority'>sort by priority</option>
        <option value='date'>sort by date</option>
      </select>
      <div className='divide-y divide-slate-300'>
        <TaskList tasks={incompletedTasks} sortBy={sortBy} />
      </div>
    </>
  );
}

export default IncompletedTask;
