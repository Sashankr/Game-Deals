import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [gameTitle, setGameTitle] = useState('')
  const [searchedGames, setSearchedGames] = useState([]);
  const [gameDeals,setGameDeals] = useState([])

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setSearchedGames(data)
      })
  }

  const handleInputChange = (event) => {
    setGameTitle(event.target.value)
  }

  useEffect(()=>{
    fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGameDeals(data);
      })
  },[])

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
              <h4>{game.external}</h4>
              <img src={game.thumb} alt={game.external} />
              <small>{game.cheapest}</small>
            </div>
          )
        })}
      </div>
      </div>

     

      <div className="deals-section">
        <h1>Latest Deals <span role="img" aria-label="fire emoji"> 🔥 </span></h1>
        {gameDeals.map((game,index)=>{
          return (
            <h1>{game.title}</h1>
          )
        })}
      </div>
    </div>
  );
}

export default App;
