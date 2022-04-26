import logo from './logo.svg';
import './App.css';
import expressServer from './components/Server/expressServer';
import { useState, useEffect} from 'react';

function App() {

  const [todoList, setTodoList] = useState([])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

export default App;
