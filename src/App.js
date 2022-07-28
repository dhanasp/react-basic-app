import logo from './logo.svg';
import './App.css';

function App() {
  
  const name = "John smith"
  const jsxElement = <h1>Hello {formatName(name)}!!!</h1> ;

  return jsxElement;
}

function formatName(name) {
  return name.toUpperCase()
}

export default App;
