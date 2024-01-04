import React, { useEffect, useState } from 'react'
import movieService from '../../services/movie-service.ts';
import ResponsiveAppBar from '../ResponsiveAppBar.tsx';
import Banner from '../Banner.tsx';
import { Spinner } from "react-activity";
import MovieList from '../MovieList.tsx';
import TopTen from '../TopTen.tsx';
import { movieData, youtubeSearchData } from '../../data/staticData.tsx';

function Home() {
  useEffect(()=>{getList()},[]);
  const [movies, setMovies] = useState([]);

  const getList = async() =>{
    const res = {
      movies: movieData,
      page: 1
  }
    setMovies(res?.movies)
    // const res = await movieService.getMovieTitles();
    // // const res = await movieService.getShowsTitles();
    // // const res = await movieService.getSearchTitles('game');
    // setMovies(res.movies);
    // console.log(res)
  }
  return (
    <div style={{  background: 'black', marginBottom: 24  }}>
      <ResponsiveAppBar/>
      {movies.length > 0 ? 
      <div>
        <Banner movies={movies} />
        <div style={{marginLeft:100, paddingTop:20, position:'relative'}}>
        <MovieList movies={movies.slice(10,20)} title={'Continue Watching'} />
        <TopTen movies={movies.slice(20,30)} title={'Top Movies in India'} />
        <MovieList movies={movies.slice(30,40)} title={'New Releases'} />
        <MovieList movies={movies.slice(40,50)} title={'US TV Dramas'} />
        </div>
      </div>

      : <div  style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '10%'}}>
      <Spinner color='red'/>
      </div>}
    </div>
  )
}

export default Home