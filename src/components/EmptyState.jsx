function EmptyState({ filter }) {
    return (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-card">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">No tasks found</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">Try a different filter</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
                There are no {filter === 'all' ? 'tasks available yet' : `${filter} tasks`} in your dashboard.
            </p>
        </div>
    );
}

export default EmptyState;
