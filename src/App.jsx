import { useState } from 'react'
import './App.css'

function App() {

  const [word, setWord] = useState("")
  const [synonyms, setSynonyms] = useState([])

  const API_URL = `https://api.datamuse.com`

  const handleFetchSynonym = (e) => {
    e.preventDefault()
    fetch(`${API_URL}/words?rel_syn=${word}`)
    .then((response) => response.json())
    .then(setSynonyms)
  }

  const handleSynonymClicked = (word) => {
    fetch(`${API_URL}/words?rel_syn=${word}`)
    .then((response) => response.json())
    .then(setSynonyms)
    setWord(word)
  }
  return (
    <div className="App">
      <form onSubmit={handleFetchSynonym}>
        <label htmlFor="word-input">Your Word</label>
        <input
          id="word-input" 
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <button>Submit</button>
      </form>
      <ul>
      {synonyms.map(synonym => <li 
      onClick={() => handleSynonymClicked(synonym.word)}
      key={synonym.word}>
        {synonym.word}
      </li>)}
      </ul>
    </div>
  )
}

export default App
