import { useState, useEffect } from "react";
import "./RepoGallery.css";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

export default function RepoGallery() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/mateuslopes92/repos?per_page=12&sort=updated"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data.filter((r) => !r.fork).slice(0, 6));
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="island-demo">
      <div className="container">
        <div className="section-header">
          <h2>Traditional CSR Demo</h2>
          <p className="section-desc">
            Everything is a React component &mdash; all JavaScript is
            downloaded and executed upfront, including for static elements.
          </p>
        </div>

        <div className="csr-vs-island">
          <div className="explanation-card traditional">
            <h3>Traditional CSR</h3>
            <p>
              In a traditional SPA, <em>all</em> JavaScript for the entire page
              is downloaded and executed before anything is interactive &mdash;
              even for static elements like the header and hero above.
            </p>
            <ul>
              <li>Header JS loaded &mdash; wasted (it's static)</li>
              <li>Hero JS loaded &mdash; wasted (it's static)</li>
              <li>Gallery JS loaded &mdash; necessary</li>
              <li>
                <strong>100% JS payload upfront</strong>
              </li>
            </ul>
          </div>

          <div className="explanation-card island">
            <h3>Island Architecture</h3>
            <p>
              With Astro's island architecture, only interactive components ship
              JavaScript. Static HTML is served immediately, and JS hydrates
              islands on demand.
            </p>
            <ul>
              <li>Header: <strong>zero JS</strong> (pure HTML + CSS)</li>
              <li>Hero: <strong>zero JS</strong> (pure HTML + CSS)</li>
              <li>Gallery: JS loads <strong>only when visible</strong></li>
              <li>
                <strong>Minimal JS payload</strong>
              </li>
            </ul>
          </div>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner" />
            <p>Loading repositories...</p>
          </div>
        )}

        {error && <div className="error">Error: {error}</div>}

        {!loading && !error && (
          <div className="gallery-grid">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                className="card"
              >
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description"}</p>
                <div className="card-footer">
                  {repo.language && (
                    <span className="language">{repo.language}</span>
                  )}
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
