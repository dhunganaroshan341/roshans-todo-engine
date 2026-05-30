function TaskFilters({ filters, selected, onSelect }) {
    return (
        <div className="flex flex-wrap gap-3">
            {filters.map((option) => (
                <button
                    key={option}
                    type="button"
                    onClick={() => onSelect(option)}
                    className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${selected === option
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                >
                    {option === 'all' ? 'All' : option === 'pending' ? 'Pending' : 'Completed'}
                </button>
            ))}
        </div>
    );
}

export default TaskFilters;
