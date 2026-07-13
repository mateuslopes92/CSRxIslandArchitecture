import { useState, useEffect } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

export default function RepoGallery() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/mateuslopes92/repos?per_page=12&sort=updated")
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

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        <p>Loading repositories...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="gallery-grid">
      {repos.map((repo) => (
        <a key={repo.id} href={repo.html_url} target="_blank" className="card">
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description"}</p>
          <div className="card-footer">
            {repo.language && <span className="language">{repo.language}</span>}
            <span>★ {repo.stargazers_count}</span>
            <span>⑂ {repo.forks_count}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

// NOTE: styles are in index.astro's global <style>
