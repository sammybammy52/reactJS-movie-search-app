import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './misc/search.svg'
import MovieCard from './MovieCard';


function App() {

  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=ff87bb53';

  

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('superman')
  }, []);

  return (
    <div className="app">
      <h1>movieland</h1>

      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
      </div>

      {
        movies?.length > 0 ?
        (
          <div className="container">

            { movies.map((i) => (
              <MovieCard movie={i}/>
            ))}
          
          </div>
        )
        :
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
