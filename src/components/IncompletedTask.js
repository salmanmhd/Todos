import { useState } from 'react';
import TaskList from './TaskList';

function IncompletedTask({
  tasks,
  onAddTask,
  onCheckTask,
  onDeleteTask,
  onUpdateTask,
}) {
  const [sortBy, setSortBy] = useState('input');

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
        <TaskList
          tasks={incompletedTasks}
          onAddTask={onAddTask}
          onCheckTask={onCheckTask}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
          sortBy={sortBy}
        />
      </div>
    </>
  );
}

export default IncompletedTask;
