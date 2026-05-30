import { useMemo, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskFilters from './components/TaskFilters';
import TaskList from './components/TaskList';
import EmptyState from './components/EmptyState';

const initialTasks = [
    { id: 1, title: 'Plan weekly sprint', status: 'pending' },
    { id: 2, title: 'Review yesterday notes', status: 'done' },
    { id: 3, title: 'Update project roadmap', status: 'pending' }
];

const FILTERS = ['all', 'pending', 'completed'];

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [filter, setFilter] = useState('all');

    const stats = useMemo(() => {
        const total = tasks.length;
        const completed = tasks.filter((task) => task.status === 'done').length;
        const pending = total - completed;
        return { total, completed, pending };
    }, [tasks]);

    const filteredTasks = useMemo(() => {
        if (filter === 'pending') return tasks.filter((task) => task.status === 'pending');
        if (filter === 'completed') return tasks.filter((task) => task.status === 'done');
        return tasks;
    }, [filter, tasks]);

    const addTask = (task) => {
        setTasks((current) => [
            { id: Date.now(), title: task.title.trim(), status: task.status },
            ...current
        ]);
    };

    const toggleTaskCompletion = (id) => {
        setTasks((current) =>
            current.map((task) =>
                task.id === id
                    ? { ...task, status: task.status === 'pending' ? 'done' : 'pending' }
                    : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((current) => current.filter((task) => task.id !== id));
    };

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-6 px-4 py-6 lg:px-8">
                <header className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-card backdrop-blur-md lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">TaskFlow</p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Mini Productivity Dashboard</h1>
                        <p className="mt-2 max-w-2xl text-slate-600">Add tasks, filter by status, and track your progress with a clean card-based UI.</p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4 shadow-sm">
                        <p className="text-sm uppercase text-slate-500">Current filter</p>
                        <p className="mt-2 text-xl font-semibold text-slate-900">{filter}</p>
                    </div>
                </header>

                <main className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
                    <aside className="space-y-6">
                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                            <h2 className="text-xl font-semibold text-slate-900">Add a new task</h2>
                            <p className="mt-2 text-sm text-slate-600">Use the form to create a title and choose a status.</p>
                            <TaskForm onAddTask={addTask} />
                        </section>

                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                            <h2 className="text-xl font-semibold text-slate-900">Stats panel</h2>
                            <div className="mt-5 space-y-4 text-slate-700">
                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Total tasks</p>
                                    <p className="mt-2 text-3xl font-semibold text-slate-900">{stats.total}</p>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl bg-emerald-50 p-4">
                                        <p className="text-sm uppercase tracking-[0.25em] text-emerald-700">Completed</p>
                                        <p className="mt-2 text-2xl font-semibold text-emerald-900">{stats.completed}</p>
                                    </div>
                                    <div className="rounded-2xl bg-amber-50 p-4">
                                        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Pending</p>
                                        <p className="mt-2 text-2xl font-semibold text-amber-900">{stats.pending}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </aside>

                    <section className="space-y-6">
                        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">Tasks</h2>
                                <p className="mt-1 text-sm text-slate-600">Filter, complete, or remove tasks from the list.</p>
                            </div>
                            <TaskFilters filters={FILTERS} selected={filter} onSelect={setFilter} />
                        </div>

                        {filteredTasks.length > 0 ? (
                            <TaskList tasks={filteredTasks} onToggle={toggleTaskCompletion} onDelete={deleteTask} />
                        ) : (
                            <EmptyState filter={filter} />
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
