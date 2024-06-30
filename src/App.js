import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plan from './pages/Plan';
import PageNotFound from './pages/PageNotFound';
import CreateToDo from './pages/CreateToDo';
import Home from './pages/Home';
import Myday from './pages/Myday';
import AllTask from './pages/AllTask';
import { createContext, useState } from 'react';
import Journal from './pages/Journal';
import Nav from './components/Nav';

//TODO: 1 - fix the working of todo

const tasksList = [
  {
    id: 1,
    title: 'Study for 3 hours in the first half',
    desc: 'Revise React and complete todos',
    priority: 10,
    isCompleted: false,
    date: new Date('2024-06-29'), // Today's date
  },
  {
    id: 2,
    title: 'Go for a run',
    desc: 'Complete a 5km run in the park',
    priority: 8,
    isCompleted: true,
    date: new Date('2024-06-28'), // Yesterday's date
  },
  {
    id: 3,
    title: 'Grocery shopping',
    desc: 'Buy vegetables, fruits, and other essentials',
    priority: 5,
    isCompleted: false,
    date: new Date('2024-06-27'), // Day before yesterday
  },
  {
    id: 4,
    title: 'Read a book',
    desc: 'Read 50 pages of the novel',
    priority: 7,
    isCompleted: false,
    date: new Date('2024-06-29'), // Today's date
  },
];

export const TaskContext = createContext();
export default function App() {
  const [tasks, setTasks] = useState(tasksList);

  function handleAddTask(newTask) {
    setTasks((prevTask) => [...prevTask, newTask]);
  }
  function handleCheck(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(updatedTasks);
  }
  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  function handleUpdateTask(updatedTask) {
    const newTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(newTasks);
  }
  function handleClearCompletedTask() {
    const newTasks = tasks.filter((task) => !task.isCompleted);

    setTasks(newTasks);
  }

  return (
    <BrowserRouter>
      <TaskContext.Provider
        value={{
          tasks,
          setTasks,
          onClearCompletedTask: handleClearCompletedTask,
          onUpdateTask: handleUpdateTask,
          onCheckTask: handleCheck,
          onDeleteTask: handleDeleteTask,
          onAddTask: handleAddTask,
        }}
      >
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/create' element={<CreateToDo />} />
          <Route path='/myday' element={<Myday />} />
          <Route path='/alltasks' element={<AllTask />} />
          <Route path='/journal' element={<Journal />} />

          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}
