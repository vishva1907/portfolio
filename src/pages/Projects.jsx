import { useEffect, useState } from "react";

import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from "../api/api";


function Projects() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [creating, setCreating] = useState(false);
const [createError, setCreateError] = useState(null);
const [updating, setUpdating] = useState(null);
const [deleting, setDeleting] = useState(null);
const [actionError, setActionError] = useState(null);
const [toast, setToast] = useState(null);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getTasks();
            setTasks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
        setToast(null);
    }, 2500);
};
const handleCreateTask = async (e) => {
    e.preventDefault();

    setCreating(true);
    setCreateError(null);

    try {
        const newTask = await createTask({
            title,
            description,
            completed: false
        });

        setTasks((prev) => [...prev, newTask]);

        setTitle("");
        setDescription("");
        showToast("Task created successfully");
    } catch (err) {
        setCreateError(err.message);
    } finally {
        setCreating(false);
    }
};
const handleUpdateTask = async (task) => {
    try {
        setUpdating(task._id);
        setActionError(null);

        const updatedTask = await updateTask(task._id, {
            title: task.title,
            description: task.description,
            completed: !task.completed
        });

        setTasks((prev) =>
            prev.map((item) =>
                item._id === updatedTask._id
                    ? updatedTask
                    : item
            )
        );
        showToast("Task updated successfully");
    } catch (err) {
        setActionError(err.message);
    } finally {
        setUpdating(null);
    }
};
const handleDeleteTask = async (id) => {
    const confirmed = window.confirm(
        "Are you sure you want to delete this task?"
    );

    if (!confirmed) {
        return;
    }

    try {
        setDeleting(id);
        setActionError(null);

        await deleteTask(id);

        setTasks((prev) =>
            prev.filter((task) => task._id !== id)
        );
        showToast("Task deleted successfully");
    } catch (err) {
        setActionError(err.message);
    } finally {
        setDeleting(null);
    }
};
    useEffect(() => {
        fetchTasks();
    }, []);

const filteredTasks = tasks.filter((task) =>
    task.title?.toLowerCase().includes(search.toLowerCase())
);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
                onRetry={fetchTasks}
            />
        );
    }

    return (
    <section className="projects">
{toast && (
    <div className={`toast ${toast.type}`}>
        {toast.message}
    </div>
)}
        <h2>My Tasks</h2>

        <form onSubmit={handleCreateTask} className="task-form">

            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit" disabled={creating}>
                {creating ? "Creating..." : "Add Task"}
            </button>

        </form>

        {createError && (
            <p className="error">{createError}</p>
        )}

        <input
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
        />

        <div className="repo-list">
            {actionError && (
    <p className="error">{actionError}</p>
)}
            {filteredTasks.map((task) => (
                <div className="repo-card" key={task._id}>

                    <h3>{task.title}</h3>

                    <p>{task.description}</p>
<p className={`task-status ${task.completed ? "completed" : "pending"}`}>
    <span className="status-dot"></span>
    {task.completed ? "Completed" : "Pending"}
</p>

                    <div className="task-actions">

    <button
        onClick={() => handleUpdateTask(task)}
        disabled={updating === task._id}
    >
        {updating === task._id
            ? "Updating..."
            : task.completed
                ? "Mark Pending"
                : "Mark Completed"}
    </button>

    <button
        onClick={() => handleDeleteTask(task._id)}
        disabled={deleting === task._id}
    >
        {deleting === task._id ? "Deleting..." : "Delete"}
    </button>

</div>

                </div>
            ))}
        </div>

    </section>
);
}

export default Projects;