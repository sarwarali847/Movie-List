import MovieListContainer from "./component/MovieListContainer.jsx";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Movie Information App</h1>
      </header>

      <div className="app-content">
        <MovieListContainer />
      </div>

      <footer className="app-footer">
        <p>&copy; 2024 Movie App</p>
      </footer>
    </div>
  );
}
