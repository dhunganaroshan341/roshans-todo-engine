import TaskCard from './TaskCard';

function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <div className="grid gap-4">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={() => onToggle(task.id)}
                    onDelete={() => onDelete(task.id)}
                />
            ))}
        </div>
    );
}

export default TaskList;
