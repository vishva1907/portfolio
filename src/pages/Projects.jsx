import { useEffect, useState } from "react";

import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RepoList from "../components/RepoList";

function Projects() {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const fetchRepos = () => {

    setLoading(true);
    setError(null);

    fetch("https://api.github.com/users/d25it131/repos")

        .then((response) => {

            if (!response.ok) {
                throw new Error("Failed to fetch repositories.");
            }

            return response.json();
        })

        .then((data) => {
            setRepos(data);
        })

        .catch((err) => {
            setError(err.message);
        })

        .finally(() => {
            setLoading(false);
        });

};
useEffect(() => {
    fetchRepos();
}, []);
    const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase()));

    if (loading) {
        return <Spinner />;
    }
    
    if (error) {
    return (
        <ErrorMessage
            message={error}
            onRetry={fetchRepos}
        />
    );
}

    return (
        <section className="projects">

            <h2>My GitHub Projects</h2>
            <input
            type="text"
            placeholder="Search repository..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
            />

            <RepoList repos={filteredRepos} />

        </section>
    );
}

export default Projects;