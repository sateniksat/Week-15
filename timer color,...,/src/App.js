// import logo from './logo.svg';
import "./App.css";
import Matrix from "./Matrix";
import Timer from "./Timer";
import Fibo from "./Fibo";
import UseMemo from "./UseMemo";
import MemoUse from "./MemoUse";
import Text from "./Text";
// import DigitTimer from './DigitTimer';

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
      <Timer />
      <Matrix />
      <Fibo />
      {/* <DigitTimer/> */}
      <br />
      <br />
      <br />
      <MemoUse />
      <br />
      <br />
      <br />
      <br />
      <UseMemo />
      <br />
      <br />
      <br />
      <br />
      <Text />
    </div>
  );
}

export default App;
