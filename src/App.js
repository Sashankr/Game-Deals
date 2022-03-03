import { useState } from 'react';
import './App.css';


function App() {

  const [gameTitle, setGameTitle] = useState('')
  const [searchedGames, setSearchedGames] = useState([]);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setSearchedGames(data)
        console.log(data)
      })
  }

  const handleInputChange = (event) => {
    setGameTitle(event.target.value)
  }

  return (
    <div className="App">
      <div className='search-section'>
        <h1>Search For A Game</h1>
        <input type="text" placeholder='Minecraft...' onChange={handleInputChange} value={gameTitle} />
        <button onClick={searchGame}>Search Game Title</button>

        <div className="games">
        {searchedGames.map((game,index)=>{
          return (
            <div key={index} className="game">
              {game.external}
            </div>
          )
        })}
      </div>
      </div>

     

      <div className="deals-section">
        <h1>Latest Deals <span role="img" aria-label="fire emoji"> 🔥 </span></h1>
      </div>
    </div>
  );
}

export default App;
