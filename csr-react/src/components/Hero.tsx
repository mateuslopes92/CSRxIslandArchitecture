import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <img
            src="https://avatars.githubusercontent.com/u/43526801?v=4"
            alt="Mateus Lopes"
            className="hero-avatar"
          />
          <h1>Mateus Lopes</h1>
          <p className="subtitle">Fullstack JavaScript Developer</p>
          <p className="description">
            ReactJS &bull; React Native &bull; NodeJS &bull; TypeScript
          </p>
          <div className="stats">
            <a
              href="https://github.com/mateuslopes92?tab=followers"
              target="_blank"
              className="stat"
            >
              <strong>19</strong>
              <span>Followers</span>
            </a>
            <a
              href="https://github.com/mateuslopes92?tab=repositories"
              target="_blank"
              className="stat"
            >
              <strong>74</strong>
              <span>Repos</span>
            </a>
            <a
              href="https://github.com/mateuslopes92?tab=following"
              target="_blank"
              className="stat"
            >
              <strong>27</strong>
              <span>Following</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
