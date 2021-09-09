import { Task } from '../Task';
import './style.scss';

interface ITasks {
    task: string;
    done: boolean;
}

interface TaskListProps {
    tasks: ITasks[]
}

export function TaskList({tasks}: TaskListProps) {
    return(
        <div className="container">
            <ul id="task-list">
                {tasks && tasks.map((task, index) => (
                    <Task key={index} task={task.task} done={task.done} />
                ))}
                
            </ul>
            <p className="footer">Desenvolvido por <a href="https://linkedin.com/in/joilsonmslopes">Joilson M S Lopes</a></p>
        </div>
    );
}