import { useEffect, useState } from 'react';
import Datepick from './Datepick';

function Form({ onAddTask, task, onUpdateTask, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(1);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.desc);
      setPriority(task.priority);
      setDate(task.date);
    }
  }, [task]);

  function handleSubmit(e) {
    e.preventDefault();

    if (task) {
      const updatedTask = {
        id: task.id,
        title,
        desc: description,
        priority,
        isCompleted: task.isCompleted,
        date,
      };
      onUpdateTask(updatedTask);
      setTitle('');
      setDescription('');
      setPriority(1);
      onClose();
      return;
    }

    if (!title) return;
    const newTask = {
      id: new Date(),
      title,
      desc: description,
      priority,
      isCompleted: false,
      date,
    };

    onAddTask(newTask);
    console.log(newTask);
    setTitle('');
    setDescription('');
    setPriority(1);
    setDate(new Date());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-slate-100 border-orange-500 border rounded-lg w-full p-4 m-10 mr-40'
    >
      <p className='text-xl mb-8'>Add Task</p>
      <input
        type='text'
        value={title}
        required
        placeholder='Title'
        className='border-gray-200 rounded-lg border p-2 mb-4 w-full'
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        value={description}
        placeholder='Description of the task'
        className='border-gray-200 border p-2 rounded-lg mb-4 w-full'
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className='flex gap-4'>
        <select
          className='border-gray-500 rounded-lg bg-white border p-2 mb-4 w-full'
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
        >
          <option value={1}>set priority</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <div className='w-full'>
          <Datepick selectedDate={date} setSelectedDate={setDate} />
        </div>
      </div>
      <div className='flex justify-end'>
        <button className='bg-orange-500 mt-8 text-white p-2 rounded-lg w-2/6'>
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Form;
