import './App.css';

function App() {
  return (
    <div className="App">
      <div className='search-section'>
        <h1>Search For A Game</h1>
        <input type="text" placeholder='Minecraft...' />
        <button>Search Game Title</button>
      </div>

      <div className="deals-section">
        <h1>Latest Deals <span role="img" aria-label="fire emoji"> 🔥 </span></h1>
      </div>
    </div>
  );
}

export default App;
