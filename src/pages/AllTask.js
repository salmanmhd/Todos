import { useContext, useState } from 'react';
import TaskList from '../components/TaskList';
import { TaskContext } from '../App';

function AllTask() {
  const [sortBy, setSortBy] = useState('input');
  const { tasks } = useContext(TaskContext);
  return (
    <div className='my-10 mx-16'>
      <select
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        className='border-black bg-blue-300 rounded-lg mt-4 border-x-1 p-2 mb-4 block w-30 ml-6'
      >
        <option value='input'>sort by input</option>
        <option value='priority'>sort by priority</option>
        <option value='completed'>sort by completed</option>
        <option value='date'>sort by date</option>
      </select>
      <TaskList tasks={tasks} sortBy={sortBy} />
    </div>
  );
}

export default AllTask;
