import { useState } from 'react';
import EditForm from './EditForm';
import { Trash2 } from 'lucide-react';

function TaskList({
  tasks,
  onCheckTask,
  onDeleteTask,
  onUpdateTask,
  sortBy = 'input',
}) {
  const [editTaskId, setEditTaskId] = useState(null);

  function handleEditClose() {
    setEditTaskId(null);
  }

  let sortedTask;

  if (sortBy === 'input') sortedTask = tasks;
  if (sortBy === 'completed')
    sortedTask = tasks
      .slice()
      .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  if (sortBy === 'priority')
    sortedTask = tasks
      .slice()
      .sort((a, b) => Number(b.priority) - Number(a.priority));
  if (sortBy === 'date') return;
  if (sortBy === 'title')
    sortedTask = tasks.slice().sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      {sortedTask.map((task) => {
        return (
          <div key={task.id} className='group flex items-center py-3'>
            <input
              className='form-checkbox h-6 w-6 accent-orange-600 mr-6 rounded-md'
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => onCheckTask(task.id)}
            />
            <div
              className={task.isCompleted ? '' : 'cursor-pointer'}
              onClick={() => {
                if (!task.isCompleted) {
                  setEditTaskId(task.id);
                }
              }}
            >
              <p
                className='text-xl'
                style={{ color: task.isCompleted ? 'grey' : 'black' }}
              >
                {task.title}
              </p>
              <p
                className='font-thin'
                style={{ color: task.isCompleted ? 'grey' : 'black' }}
              >
                {task.desc}
              </p>
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                onDeleteTask(task.id);
              }}
              className='items-center ml-20 mt-2 text-xl pb-4 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200'
            >
              <Trash2 />
            </div>
            {editTaskId === task.id && (
              <EditForm
                task={task}
                onClose={handleEditClose}
                onUpdateTask={onUpdateTask}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default TaskList;
