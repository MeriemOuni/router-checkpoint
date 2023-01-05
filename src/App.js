import React, {useState} from 'react';
import './App.css';
import {moviesData} from './Components/Data';
import MovieList from './Components/MovieList';
import AddMovies from './Components/AddMovies'; 
import FilterMovie from './Components/FilterMovie';
import FilterRate from './Components/FilterRate';
function App() {
  const [movies , setMovies] = useState(moviesData);
  const add = (newMovie) => {
setMovies([...movies,newMovie])
  }
  const [inputSearch , setInputSearch] = useState("");
  const [rateSearch , setRateSearch] = useState("");

  return (
    <div className="App">    
      <FilterRate rateSearch={rateSearch} setRateSearch={setRateSearch} />
      <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <MovieList movies={movies} inputSearch={inputSearch} rateSearch={rateSearch} />
      <AddMovies add={add} />    
    </div>
  );
}

export default App;
