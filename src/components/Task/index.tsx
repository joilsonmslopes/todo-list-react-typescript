import { MdDelete } from 'react-icons/md';
import './style.scss';

interface TaskProps {
    id: number;
    task: string;
    done: boolean;
    handleUpdateTask: (id: number) => void;
    handleDeleteTask: (id: number) => void;
}

export function Task({id, task, done, handleUpdateTask, handleDeleteTask}: TaskProps) {
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