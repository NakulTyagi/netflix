import React from 'react'
import { useNavigate } from 'react-router-dom'

function MovieList({movies, title}:any) {
  const navigate = useNavigate();
  return (
    <div style={{marginLeft:100, marginTop: 50, cursor: 'pointer'}}>
      <div style={{
        color: '#FFF',
        fontFamily: 'Helvetica Neue',
        fontSize: '30px',
        fontWeight: 700,
      }}>
        {title}
      </div>
      <div style={{display:'flex',  gap:20, maxWidth: '94%', marginTop:20, overflow: 'auto'}}>
          {movies.length>0 && movies.map((film, index)=>{
            return <div key={index} style={{display:'flex', alignItems:'center'}} onClick={()=>navigate('/play')} >
              <img loading="lazy" src={film.backdrop_path} style={{borderRadius: 12}} alt="" height={190} width={330} />
            </div>
          })}
      </div>
  </div>
  )
}

export default MovieList