import React, { useEffect, useState } from 'react'
import movieService from '../services/movie-service.ts';
import ResponsiveAppBar from './ResponsiveAppBar.tsx';
import Banner from './Banner.tsx';

function Home() {
  useEffect(()=>{getList()},[]);
  const [movies, setMovies] = useState([])
  const getList = async() =>{
    const res = await movieService.getMovieTitles();
    // const res = await movieService.getShowsTitles();
    // const res = await movieService.getSearchTitles('game');
    setMovies(res.movies);
    console.log(res)
  }
  return (
    <div style={{  background: 'black'  }}>
      <ResponsiveAppBar/>
      {movies.length>0 && <Banner movies={movies} />}
      <div style={{marginLeft:100, marginTop: 50}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          New & Popular
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', overflow: 'auto'}}>
            {movies.length>0 && movies.slice(0,10).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <div
                  className='index'
                  style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: 364,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    marginRight: -60,
                  }}
                >{index+1}</div>
                <img src={film.poster_path} alt="" height={274} width={182} />
              </div>
            })}
        </div>
      </div>
      <div style={{marginLeft:100, marginTop: 50}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          Top 10 in India
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', overflow: 'auto'}}>
            {movies.length>0 && movies.slice(10,20).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <div
                  className='index'
                  style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: 364,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    marginRight: -60,
                  }}
                >{index+1}</div>
                <img src={film.poster_path} alt="" height={274} width={182} />
              </div>
            })}
        </div>
      </div>
      <div style={{marginLeft:100, marginTop: 50}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          Top 10 in World
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', overflow: 'auto'}}>
            {movies.length>0 && movies.slice(20,30).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <div
                  className='index'
                  style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: 364,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    marginRight: -60,
                  }}
                >{index+1}</div>
                <img src={film.poster_path} alt="" height={274} width={182} />
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Home