import React, { useEffect, useState } from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import PlayIcon from '@mui/icons-material/PlayArrowRounded';
import InfoIcon from '@mui/icons-material/InfoOutlined';


function Banner({movies}:any) {
  const [movie, setMovie] = useState(null);
  console.log(movies)

  useEffect(()=>{
    setMovie(movies[13])
  },[])

  return (
    <div>
      {
        movies && movie && 
        <div>
        <div className='banner' style={{height: window.screen.height -250, width:'100%',backgroundImage: `url(${movie?.backdrop_path})`, backgroundSize:'cover', position:'relative'}}>
        </div>
        <div style={{position:'absolute', bottom: 120, marginLeft: 100, overflowX:'hidden'}}>
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
              width: '40%'
            }}
          >
            {movie.overview}
          </div>
          <Button component="label" variant="contained" 
            style=
            {{backgroundColor: 'white', color: 'black', marginTop: 44, height: 60, width: 168,
              fontSize: '20px',
              fontWeight: 700,
            }} 
            startIcon={<PlayIcon style={{height: 40, width: 40}} />}>
            Play
          </Button>
          <Button component="label" variant="contained" 
            style=
            {{backgroundColor: 'rgba(255, 255, 255, 0.20)', color: 'white', marginTop: 44, height: 60,
              fontSize: '20px',
              fontWeight: 700,
              marginLeft: 8
            }} 
            startIcon={<InfoIcon style={{height: 40, width: 40}} />}>
            More Info
          </Button>
        </div>
        </div>
      }
    </div>
  )
}

export default Banner