import React, { useEffect, useState } from 'react'
import movieService from '../../services/movie-service.ts';
import ResponsiveAppBar from '../ResponsiveAppBar.tsx';
import Banner from '../Banner.tsx';
import { Spinner } from 'react-activity';
import TopTen from '../TopTen.tsx';
import MovieList from '../MovieList.tsx';
import { isMobile } from 'react-device-detect';
import MovieDetailList from '../MovieDetailList.tsx';
import { movieData } from '../../data/staticData.tsx';

function Movies() {

  useEffect(()=>{getList()},[]);
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movieGenres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState(false);

  const getList = async() =>{
    let res = {
      movies: movieData,
      page: 1
  }
    setMovies(res?.movies.slice(15,70));
    setMovieList(res?.movies.slice(15,70));
    const genreList:any = [];
    res?.movies.map((movie)=>{
        movie?.genres.forEach((item:any)=>{
            if(!genreList.includes(item)){
                genreList.push(item);
            }
        })
    })
    setGenres(genreList);
    // const res = await movieService.getMovieTitles();
    // // const res = await movieService.getShowsTitles();
    // // const res = await movieService.getSearchTitles('game');
    // setMovies(res.movies);
    // console.log(res)
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

export default Movies