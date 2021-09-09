import { ChangeEvent } from 'react';
import { Button } from '../Button';
import './style.scss';

interface NewTaskProps {
    handleAddNewTask: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAddTasks: () => void;
    task: string;
}

export function NewTask({task, handleAddNewTask, handleAddTasks}: NewTaskProps) {
    return(
        <section id="new-task">
            <div>
                <input 
                    type="text"
                    onChange={(e) => handleAddNewTask(e)}
                    value={task}
                />
                <Button
                    handleAddTasks={() => handleAddTasks()}
                />
            </div>
        </section>
    );
}