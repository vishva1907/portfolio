function RepoList({ repos }) {
    return (
        <div className="repo-list">

            {repos.map((task) => (
                <div className="repo-card" key={task._id}>

                    <h3>{task.title}</h3>

                    <p>
                        {task.description || "No description"}
                    </p>

                    <p>
                        Status:{" "}
                        {task.completed ? "Completed" : "Pending"}
                    </p>

                </div>
            ))}

        </div>
    );
}

export default RepoList;