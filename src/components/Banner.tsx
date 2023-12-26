import React, { useEffect, useState } from 'react';
import './Banner.css';

function Banner({movies}:any) {
  const [movie, setMovie] = useState(null);
  console.log(movies)

  useEffect(()=>{
    setMovie(movies[0])
  },[])

  return (
    <div>
      {
        movies && movie && 
        <div className='banner' style={{height: window.screen.height -169, width:'100%',backgroundImage: `url(${movie?.backdrop_path})`, backgroundSize:'cover', position:'relative'}}>
          <div style={{position:'absolute', bottom: 100, marginLeft: 100, overflowX:'hidden'}}>
            <div
              style={{
                color: '#FFF',
                fontSize: '30px',
                fontWeight: 700,
              }}
            >
              {movie?.title}
            </div>
            <div
              style={{
                color: '#FFF',
                fontSize: '22px',
                fontWeight: 300,
                marginTop: 40,
                width: '60%'
              }}
            >
              {movie.overview}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Banner