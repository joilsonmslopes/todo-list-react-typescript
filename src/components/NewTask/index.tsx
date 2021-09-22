import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { Button } from '../Button';
import './style.scss';

export function NewTask() {
    const { task, handleAddNewTask } = useContext(TasksContext)
    return(
        <section id="new-task">
            <div>
                <input 
                    type="text"
                    onChange={(e) => handleAddNewTask(e)}
                    value={task}
                />
                <Button />
            </div>
        </section>
    );
}