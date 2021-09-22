import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { Task } from '../Task';
import './style.scss';

export function TaskList() {
    const { tasks } = useContext(TasksContext)
    return(
        <div className="container">
            <ul id="task-list">
                {tasks && tasks.map((task) => (
                    <Task
                        key={task.id} 
                        task={task.task} 
                        done={task.done} 
                        id={task.id} 
                    />
                ))}
                
            </ul>
            <p className="footer">Desenvolvido por <a href="https://linkedin.com/in/joilsonmslopes">Joilson M S Lopes</a></p>
        </div>
    );
}