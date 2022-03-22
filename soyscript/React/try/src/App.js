import logo from './logo.svg';
import './App.css';
import { sum } from './components/functions.js';

function App() {
  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Soma de 2+2 = {sum(2, 2)}</p>
    </div>
  );
}

export default App;
