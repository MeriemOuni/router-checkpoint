import React from 'react';
//import Trailer from '../Pages/Trailer';
import MovieCard from './MovieCard';
import './movielist.css'; 
const MovieList = ({movies , inputSearch , rateSearch}) => {
  //{movies.map(movie => <Trailer movie={movie} />)}  
  return (
    <div className='movielist'> 
        {(rateSearch>0) ? movies 
        .filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase()) && movie.rate == (rateSearch))
        .map(movie => <MovieCard movie={movie} key={movie.id} />):
        movies.filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase())).map(movie => <MovieCard movie={movie} key={movie.id} />)
        };    
       
    </div>
  ) 
}

export default MovieList