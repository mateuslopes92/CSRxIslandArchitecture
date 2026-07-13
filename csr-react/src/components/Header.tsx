import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <a href="/" className="logo">
          <img
            src="https://avatars.githubusercontent.com/u/43526801?v=4"
            alt="Avatar"
            className="avatar"
          />
          <span>Mateus Lopes</span>
        </a>
        <nav>
          <a href="https://github.com/mateuslopes92" target="_blank">
            GitHub
          </a>
          <a
            href="https://github.com/mateuslopes92?tab=repositories"
            target="_blank"
          >
            Repos
          </a>
        </nav>
      </div>
    </header>
  );
}
