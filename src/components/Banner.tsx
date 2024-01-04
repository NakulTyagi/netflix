import React, { useEffect, useState } from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import PlayIcon from '@mui/icons-material/PlayArrowRounded';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';
import InfoDialog from './dialogs/InfoDialog.tsx';
import MovieList from './MovieList.tsx';
import LinesEllipsis from 'react-lines-ellipsis';


function Banner({movies}:any) {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  useEffect(()=>{
    setMovie(movies[Math.floor(Math.random() * 30) || 0]);
    console.log(movies[0])

  },[])

  return (
    <div>
      {
        movies && movie && 
        <div>
        <div className='banner' style={{height: window.screen.height*0.62, marginTop:0,width:'100%',backgroundImage: `url(${movie?.backdrop_path})`, backgroundSize:'cover', position:'relative'}}>
        </div>
        <div style={{position:'absolute', top: '30%', maxHeight: 600,marginLeft: 100, overflowX:'hidden'}}>
          <div
            style={{
              color: '#FFF',
              fontSize: '36px',
              fontWeight: 700,
              textTransform: 'uppercase'
            }}
          >
            {movie?.title}
          </div>
          <LinesEllipsis
              text={movie.overview}
              maxLine='3'
              ellipsis='...'
              trimRight
              basedOn='letters'
                        style={{
              color: '#FFF',
              fontSize: '22px',
              fontWeight: 300,
              marginTop: 40,
              width: '40%'
            }}
          />

          <Button component="label" variant="contained" 
            onClick={()=>navigate('/play',{state:{title:movie?.title}})}
            style=
            {{backgroundColor: 'white', color: 'black', marginTop: 44, height: 60, width: 168,
              fontSize: '20px',
              fontWeight: 700,
            }} 
            startIcon={<PlayIcon style={{height: 48, width: 48}} />}>
            Play
          </Button>
          <Button component="label" variant="contained" 
            onClick={handleClickOpen}
            style=
            {{backgroundColor: 'rgba(255, 255, 255, 0.20)', color: 'white', marginTop: 44, height: 60,
              fontSize: '20px',
              fontWeight: 700,
              marginLeft: 8
            }} 
            startIcon={<InfoIcon style={{height: 32, width: 32}} />}>
            More Info
          </Button>
          <InfoDialog
            selectedValue={selectedValue}
            movie={movie}
            movies={movies}
            open={open}
            onClose={handleClose}
          />

        </div>
        <div style={{marginTop: 0, marginLeft:100}}>
            <MovieList movies={movies.slice(0,10)} title={'Popular on Netflix'} />
          </div>
        </div>
      }
    </div>
  )
}

export default Banner