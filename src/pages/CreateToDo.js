import Form from '../components/Form';
import CompletedTask from '../components/CompletedTask';
import IncompletedTask from '../components/IncompletedTask';

function CreateToDo({
  tasks,
  onAddTask,
  onCheckTask,
  onDeleteTask,
  onUpdateTask,
  onClearCompletedTask,
}) {
  return (
    <>
      <div className='flex justify-between'>
        <div className='w-3/5'>
          <div className='w-3/5'>
            <Form onAddTask={onAddTask} />
          </div>
          <div className='m-10 w-3/5'>
            <CompletedTask
              tasks={tasks}
              onAddTask={onAddTask}
              onCheckTask={onCheckTask}
              onDeleteTask={onDeleteTask}
              onUpdateTask={onUpdateTask}
              onClearCompletedTask={onClearCompletedTask}
            />
          </div>
        </div>
        <div className='w-2/5'>
          <IncompletedTask
            tasks={tasks}
            onAddTask={onAddTask}
            onCheckTask={onCheckTask}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        </div>
      </div>
    </>
  );
}

export default CreateToDo;
