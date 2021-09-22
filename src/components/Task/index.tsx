import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { TasksContext } from '../../contexts/TasksContext';
import './style.scss';

interface TaskProps {
    id: number;
    task: string;
    done: boolean;
}

export function Task({id, task, done}: TaskProps) {
    const { handleUpdateTask, handleDeleteTask } = useContext(TasksContext);
    return(
        <>
            <li>
                <div className="input-group">
                    <input
                        type="checkbox"
                        id={'check_' + id}
                        defaultChecked={done}
                        onClick={() => handleUpdateTask(id)}
                    />
                    <label
                        htmlFor={'check_' + id}
                        className={done ? 'active' : ''}
                    >
                        {task}
                    </label>
                </div>
                <span onClick={() => {handleDeleteTask(id)}}>
                    <MdDelete />
                </span>
            </li>
        </>
    );
}