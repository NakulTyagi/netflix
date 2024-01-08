import React, { useEffect, useState } from 'react'
import movieService from '../../services/movie-service.ts';
import ResponsiveAppBar from '../ResponsiveAppBar.tsx';
import Banner from '../Banner.tsx';
import { Spinner } from 'react-activity';
import { isMobile } from 'react-device-detect';
import MovieList from '../MovieList.tsx';
import TopTen from '../TopTen.tsx';
import MovieDetailList from '../MovieDetailList.tsx';
import { movieData } from '../../data/staticData.tsx';

function Series() {

  useEffect(()=>{getList()},[]);
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movieGenres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState(false);

  const getList = async() =>{
    // const res = await movieService.getShowsTitles();
    let res = {
      movies: movieData,
      page: 1
    }
    setMovies(res.movies);
    setMovieList(res.movies);
    const genreList:any = [];
    res.movies.map((movie)=>{
        console.log(movie)
        movie?.genres.forEach((item:any)=>{
            if(!genreList.includes(item)){
                genreList.push(item);
            }
        })
    })
    setGenres(genreList);
  }

  const filterByGenre = (genre)=>{
    const list = [...movieList];
    setMovies(list.filter((movie)=>{
        return movie?.genres.includes(genre)
    }))
    setGenreSelected(true);
  }

  return (
    <div style={{  background: 'black', paddingBottom: 50  }}>
      <ResponsiveAppBar/>
      {movies.length>0 ? 
      <div>
        <Banner movies={movies} genres={movieGenres} genresUpdate={(genre)=>{filterByGenre(genre)}} />
        {genreSelected ? <div style={{margin: isMobile ? 20: 100, position:'relative'}}>
            <MovieDetailList movies={movies}/>
        </div> :
        <div style={{marginLeft: isMobile ? 20: 100, position:'relative'}}>

            <MovieList movies={movies.slice(10,20)} title={'New on Netflix'} />

            <TopTen movies={movies.slice(0,10)} title={'Top Movies in India'} />


            {/* <VertList movies={movies.slice(20,30)} title={'Recommended'}/> */}

            <MovieList movies={movies.slice(20,30)} title={'Netflix Originals'}/>
        </div>}
      </div>:
      <div  style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '10%'}}>
      <Spinner color='red'/>
      </div>}
    </div>
  )
}

export default Series