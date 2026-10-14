const BASE_URL = "http://localhost:5010";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    };
};

export const getTasks = async () => {
    const response = await fetch(`${BASE_URL}/tasks`, {
        headers: getAuthHeaders()
    });

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return response.json();
};

export const createTask = async (task) => {
    const response = await fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(task)
    });

    if (!response.ok) {
        throw new Error("Failed to create task");
    }

    const data = await response.json();

    return data.task;
};

export const updateTask = async (id, task) => {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(task)
    });

    if (!response.ok) {
        throw new Error("Failed to update task");
    }

    const data = await response.json();

    return data.task;
};

export const deleteTask = async (id) => {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
    });

    if (!response.ok) {
        throw new Error("Failed to delete task");
    }

    return response.json();
};