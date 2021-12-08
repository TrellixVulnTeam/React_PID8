import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';




const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/danielrgb23/React',
}

export function RepositoryList() {
    const [repositorires, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              <RepositoryItem repository={repository} />
              <RepositoryItem repository={repository} />
              <RepositoryItem repository={repository} />
              <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}