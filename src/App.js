import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar.jsx";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer.jsx"


function App() {
  return (
    <div>
      <header >
        <NavBar/>
      </header>
      <main>
      <ItemListContainer greeting="Harry Potter y la Piedra Filosofal"/>

      </main>
    </div>
  );
}

export default App;
