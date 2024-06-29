import TaskList from './TaskList';

function CompletedTask({
  tasks,
  onAddTask,
  onCheckTask,
  onDeleteTask,
  onUpdateTask,
  onClearCompletedTask,
}) {
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
      <TaskList
        tasks={completedTasks}
        onAddTask={onAddTask}
        onCheckTask={onCheckTask}
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
      />
    </div>
  );
}

export default CompletedTask;
