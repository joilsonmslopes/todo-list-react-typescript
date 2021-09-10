import { ChangeEvent, useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import './styles/global.scss';

interface ITasks {
  id: number;
  task: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>(() => {
    const storagedTasks = localStorage.getItem('ls_tasks');

    if(storagedTasks) {
      return JSON.parse(storagedTasks);
    }

    return [];
  })
  const [task, setTask] = useState('');

  function handleAddNewTask(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
  }

  function handleAddTasks() {
      const newTask = {
          id: Date.now(),
          task,
          done: false
      }

      setTasks(oldTask => [...oldTask, newTask]);
      localStorage.setItem('ls_tasks', JSON.stringify([...tasks, newTask]))
      setTask('');
  }

  function handleUpdateTask(id: number) {
    const updatedTask = tasks.map(task => task.id === id ? {
      ...task,
      done: !task.done
    } : task);

    localStorage.setItem('ls_tasks', JSON.stringify(updatedTask))

    setTasks(updatedTask);
  }

  return (
    <div className="App">
      <Header />
      <NewTask task={task} handleAddTasks={handleAddTasks} handleAddNewTask={handleAddNewTask}/>
      <TaskList tasks={tasks} handleUpdateTask={handleUpdateTask}/>
    </div>
  );
}

export default App;