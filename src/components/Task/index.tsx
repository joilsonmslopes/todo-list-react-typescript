import './style.scss';

interface TaskProps {
    task: string;
    done: boolean;
}

export function Task({task, done}: TaskProps) {
    return(
        <>
            <li>
                <input
                    type="checkbox"
                    id="check01"
                    checked={done}
                />
                <label htmlFor="check01">{task}</label>
            </li>
        </>
    );
}