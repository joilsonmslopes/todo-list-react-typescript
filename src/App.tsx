import { ChangeEvent, useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import './styles/global.scss';

interface ITasks {
  task: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [task, setTask] = useState('');

  function handleAddNewTask(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
  }

  function handleAddTasks() {
      const newTask = {
          task,
          done: false
      }

      setTasks(oldTask => [...oldTask, newTask]);
      setTask('');
  }

  return (
    <div className="App">
      <Header />
      <NewTask task={task} handleAddTasks={handleAddTasks} handleAddNewTask={handleAddNewTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;