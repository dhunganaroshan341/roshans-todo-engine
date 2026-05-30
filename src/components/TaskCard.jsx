function TaskCard({ task, onToggle, onDelete }) {
    const isDone = task.status === 'done';
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition hover:shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Task</p>
                    <h3 className={`mt-3 text-lg font-semibold ${isDone ? 'text-emerald-800' : 'text-slate-900'}`}>
                        {task.title}
                    </h3>
                </div>
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${isDone ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}
                >
                    {isDone ? 'Completed' : 'Pending'}
                </span>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="button"
                    onClick={onToggle}
                    className={`inline-flex items-center justify-center rounded-3xl px-4 py-2 text-sm font-semibold transition ${isDone
                            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            : 'bg-emerald-600 text-white hover:bg-emerald-700'
                        }`}
                >
                    {isDone ? 'Mark pending' : 'Mark complete'}
                </button>

                <button
                    type="button"
                    onClick={onDelete}
                    className="inline-flex items-center justify-center rounded-3xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                >
                    Delete task
                </button>
            </div>
        </article>
    );
}

export default TaskCard;
