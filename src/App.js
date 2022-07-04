import { useState, useRef } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { DataContext } from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";

function App() {
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);
  let searchInput = useRef("");

 const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault();
    //Fetch data
    const fetchData = async () => {
      document.title = `${term} Music`;
      const response = await fetch(API_URL + term)
      const resData = await response.json();
      if (resData.results.length > 0) {
        //Set State and Context value
        return setData(resData.results);
      } else {
        return setMessage("Not Found");
      }
    }
    fetchData()
  }

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          term: searchInput,
          handleSearch: handleSearch,
        }}
      >
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;*/
