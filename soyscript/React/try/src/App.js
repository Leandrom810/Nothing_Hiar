import logo from './logo.svg';
import './App.css';
import operator from './scripts/mathFuncs'

function App() {
  const REACT = "React"
  return (
    <div className="App">
      <h2>kkkkkk cadê?</h2>
      <p>SUMIU KKKKKKKKKK</p>
      <h1>Olá {REACT}</h1>
      <hr></hr>
      <p>sum 2 + 2 = {operator.sum(2,2)}</p>
      <br></br>
      <p>{logo}</p>
    </div>
  );
}

export default App;
