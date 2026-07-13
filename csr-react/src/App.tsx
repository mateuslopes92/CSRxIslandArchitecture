import Header from "./components/Header";
import Hero from "./components/Hero";
import RepoGallery from "./components/RepoGallery";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <RepoGallery />
      <footer>
        <div className="container">
          <p>
            Built with <a href="https://react.dev" target="_blank">React</a> to
            demonstrate how Traditional CSR loads JavaScript for all components,
            even static ones.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
