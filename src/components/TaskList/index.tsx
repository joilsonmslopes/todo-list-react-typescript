import { Task } from '../Task';
import './style.scss';

interface ITasks {
    id: number;
    task: string;
    done: boolean;
}

interface TaskListProps {
    tasks: ITasks[];
    handleUpdateTask:(id: number) => void;
}

export function TaskList({tasks, handleUpdateTask}: TaskListProps) {
    return(
        <div className="container">
            <ul id="task-list">
                {tasks && tasks.map((task) => (
                    <Task key={task.id} task={task.task} done={task.done} id={task.id} handleUpdateTask={() => handleUpdateTask(task.id)} />
                ))}
                
            </ul>
            <p className="footer">Desenvolvido por <a href="https://linkedin.com/in/joilsonmslopes">Joilson M S Lopes</a></p>
        </div>
    );
}