//import logo from './logo.svg';
import './App.css';
import FunctionalCom from './components/FunctionalCom';
import ToggleImage from './components/ToggleImage';
import MultipleImage from './components/MultipleImage';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Welcome to React Series!!</h2>
      {/* <FunctionalCom myname="shiva"></FunctionalCom> */}
      {/* <ToggleImage></ToggleImage> */}
      <MultipleImage></MultipleImage>

    </div>
  );
}

export default App;
