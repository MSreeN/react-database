import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const[movies, setMovies] = useState([]);

  function movieFetchHandler(){
    fetch("https://swapi.dev/api/films").then( response => {
      return response.json();
    }).then( data => {
      const movies = data.results.map (movie => {
        return {
          id : movie.episode_id,
          title: movie.opening_crawl,
          date: movie.release_date
        }
      })
    })
    setMovies(movies);
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={movieFetchHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
