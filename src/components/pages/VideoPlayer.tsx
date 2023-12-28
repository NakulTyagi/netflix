import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayIcon from '@mui/icons-material/PlayArrowRounded';
import PauseIcon from '@mui/icons-material/Pause';
import { useNavigate } from 'react-router-dom';
import './Player.css';

function VideoPlayer() {
  const navigate = useNavigate();
  const [playing, setPlaying] = useState(true);
  return (
    <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <ArrowBackIcon 
        style={{position:'absolute',cursor:'pointer', top: 40, left:24, height: 32, width:32, color:'white'}} 
        onClick={()=>navigate('/')}
      />
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
        width='96vw'
        height='80vh'
        style={{padding:20}}
        playing={playing}
      />
      {playing ?
      <PauseIcon 
        style={{position:'absolute',cursor:'pointer', bottom: 10, left:12, height: 80, width:80, color:'white'}} 
        onClick={()=> setPlaying(false)}
      />:
      <PlayIcon 
        style={{position:'absolute',cursor:'pointer', bottom: 10, left:12, height: 80, width:80, color:'white'}} 
        onClick={()=> setPlaying(true)}
      />
      }
    </div>
  )
}

export default VideoPlayer