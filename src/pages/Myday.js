import { useContext } from 'react';
import TaskList from '../components/TaskList';
import { TaskContext } from '../App';

function Myday() {
  const todaysDate = new Date().toLocaleDateString();
  const { tasks } = useContext(TaskContext);
  // Filter tasks to get today's tasks
  const todaysTasks = tasks.filter(
    (task) => new Date(task.date).toLocaleDateString() === todaysDate
  );

  console.log(todaysTasks);

  return (
    <>
      <div className='m-10'>
        <TaskList tasks={todaysTasks} sortBy='priority' />
      </div>
    </>
  );
}

export default Myday;
