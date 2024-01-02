import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import './Info.css';
import PlayIcon from '@mui/icons-material/PlayArrowRounded';
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';
import RecommendIcon from '@mui/icons-material/Recommend';
import { useNavigate } from 'react-router-dom';
import MovieDetailList from '../MovieDetailList.tsx';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  movie: any;
  movies?: any;
  onClose: (value: string) => void;
}

export default function InfoDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, movie, movies } = props;
  const navigate = useNavigate();
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth={'lg'}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className='banner' style={{minHeight: window.screen.height*0.4, overflowY:'auto', backgroundImage: `url(${movie?.backdrop_path})`, backgroundSize:'cover'}}>
        </div>
        <DialogTitle style={{fontSize:56, fontWeight:500}}>{movie.title}</DialogTitle>

        <DialogActions style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>

          <Button component="label" variant="contained" 
            onClick={()=>navigate('/play')}
            style=
            {{backgroundColor: 'white', color: 'black', height: 40, width: 128,
              fontSize: '20px',
              fontWeight: 700,
              marginLeft: 20
            }} 
            startIcon={<PlayIcon style={{height: 48, width: 48, marginRight: 0}} />}>
            Play
          </Button>
          <AddCircleIcon style={{height: 48, width: 48, marginRight: 0}} />
          <RecommendIcon style={{height: 48, width: 48, marginRight: 0}} />
        </DialogActions>

       
        <DialogContent>
          <div style={{display:'flex', gap: 60, justifyContent:'space-between'}}>
            <DialogContentText 
              style={{
                width:'50%',
                }} id="alert-dialog-slide-description">
              {movie.overview}
            </DialogContentText>
            <div style={{display:'flex', flexDirection:'column'}}>
              <div style={{display:'flex', alignItems:'center', flexWrap:'wrap'}}>
                <div style={{color:'rgba(255, 255, 255, 0.80)', marginRight: 12}}>Genres: </div>
                {movie.genres.map((genre, index)=>
                  <DialogContentText  id="alert-dialog-slide-description">
                    {genre}{index===movie.genres.length-1 ?  '': ', '}
                  </DialogContentText>
                ) }
              </div>
              <div style={{display:'flex', alignItems:'center', flexWrap:'wrap'}}>
                <div style={{color:'rgba(255, 255, 255, 0.80)', marginRight: 12}}>Content Type: </div>
                  <DialogContentText  id="alert-dialog-slide-description">
                    {movie.contentType}
                  </DialogContentText>
              </div>
              <div style={{display:'flex', alignItems:'center', flexWrap:'wrap'}}>
                <div style={{color:'rgba(255, 255, 255, 0.80)', marginRight: 12}}>First Aired: </div>
                  <DialogContentText  id="alert-dialog-slide-description">
                    {movie.first_aired}
                  </DialogContentText>
              </div>
            </div>
          </div>
        </DialogContent>

        <MovieDetailList title={'More like this'} movies={movies}/>
      </Dialog>
    </React.Fragment>
  );
}