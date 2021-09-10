import './style.scss';

interface TaskProps {
    id: number;
    task: string;
    done: boolean;
    handleUpdateTask: (id: number) => void;
}

export function Task({id, task, done, handleUpdateTask}: TaskProps) {
    return(
        <>
            <li 
                className={done ? 'active' : ''}
            >
                <input
                    type="checkbox"
                    id={'check_' + id}
                    defaultChecked={done}
                    onClick={() => handleUpdateTask(id)}
                />
                <label htmlFor={'check_' + id}>{task}</label>
            </li>
        </>
    );
}