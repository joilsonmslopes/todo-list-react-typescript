import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import { TasksProvider } from './contexts/TasksContext';
import './styles/global.scss';


function App() {
  return (
    <TasksProvider>
      <Header />
      <NewTask />
      <TaskList />
    </TasksProvider>
  );
}

export default App;