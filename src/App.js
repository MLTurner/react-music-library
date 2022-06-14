


import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        document.title = `${search} Music`
        const response = await fetch ('https://itunes.apple.com/search?term=the%20grateful%20dead')
        const resData = await response.json()
        if (resData.results.length > 0) {
        setData(resData.results)
        } else {
        setMessage('Not Found')
        }
      }
    fetchData()
}, [search])

    return (
        <div>
            <SearchBar />
            {message}
            <Gallery />
        </div>
    )
}

export default App

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
