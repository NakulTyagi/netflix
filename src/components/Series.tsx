import React, { useEffect, useState } from 'react'
import movieService from '../services/movie-service.ts';
import ResponsiveAppBar from './ResponsiveAppBar.tsx';
import Banner from './Banner.tsx';
import { Spinner } from 'react-activity';

function Series() {

  useEffect(()=>{getList()},[]);
  const [movies, setMovies] = useState([])
  const getList = async() =>{
    const res = await movieService.getShowsTitles();
    setMovies(res.movies);
  }

  return (
    <div style={{  background: 'black', paddingBottom: 50  }}>
      <ResponsiveAppBar/>
      {movies.length>0 ?
      <div>
      <Banner movies={movies} />
      <div style={{marginLeft:100, marginTop: 50,}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          New on Netflix
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', marginTop:20, overflow: 'auto'}}>
            {movies.length>0 && movies.slice(10,20).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <img src={film.backdrop_path} style={{borderRadius: 12}} alt="" height={294} width={520} />
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
          Top Shows in India
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

      <div style={{marginLeft:100, marginTop: 50,}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          Recommended
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', marginTop:20, overflow: 'auto'}}>
            {movies.length>0 && movies.slice(20,30).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <img src={film.poster_path} alt="" height={696} width={410} />
              </div>
            })}
        </div>
      </div>

      <div style={{marginLeft:100, marginTop: 50,}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          Netflix Originals
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', marginTop:20, overflow: 'auto'}}>
            {movies.length>0 && movies.slice(30,40).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <img src={film.poster_path} alt="" height={696} width={410} />
              </div>
            })}
        </div>
      </div>
      </div>:
      <div  style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop: '10%'}}>
      <Spinner color='red'/>
      </div>}
    </div>
  )
}

export default Series