import logo from './logo.svg';
import './App.css';
import Chart from './Chart1/Chart';
import Home from './OrderBook/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart></Chart>
        <Home></Home>
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
      </header>
    </div>
  );
}

export default App;
