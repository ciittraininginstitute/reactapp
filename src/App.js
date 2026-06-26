import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to React Application
        </p>
        <a
          className="App-link"
          href="https://ciitinstitute.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CIIT Training Institute
        </a>
      </header>
    </div>
  );
}

export default App;
