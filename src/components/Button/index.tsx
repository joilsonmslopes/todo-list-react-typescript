import './style.scss';

interface ButtonProps {
    handleAddTasks: () => void;
}

export function Button({handleAddTasks}: ButtonProps) {
    return (
        <button
            className="btn"
            onClick={() => {handleAddTasks()}}
        >
            Salvar
        </button>
    );
}