function RepoList({ repos }) {
    return (
        <div className="repo-list">

            {repos.map((repo) => (
                <div className="repo-card" key={repo.id}>

                    <h3>{repo.name}</h3>
                    <p className="repo-stars">
                        ⭐ Stars: {repo.stargazers_count}
                        </p>
                        <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        >
                            View Repository
                            </a>

                </div>
            ))}

        </div>
    );
}

export default RepoList;