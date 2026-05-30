import { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('pending');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title.trim()) return;
        onAddTask({ title, status });
        setTitle('');
        setStatus('pending');
    };

    return (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium text-slate-700">
                    Task title
                </label>
                <input
                    id="title"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Add a new task"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="status" className="block text-sm font-medium text-slate-700">
                    Status
                </label>
                <select
                    id="status"
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                >
                    <option value="pending">Pending</option>
                    <option value="done">Completed</option>
                </select>
            </div>

            <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
                Add task
            </button>
        </form>
    );
}

export default TaskForm;
