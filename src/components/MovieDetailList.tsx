import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis';
import { useNavigate } from 'react-router-dom'

function MovieDetailList({movies, title}:any) {
  const navigate = useNavigate();
  return (
    <div style={{ padding:20, marginTop: 50, cursor: 'pointer', color:'#d2d2d2'}}>
      <div style={{
        color: '#FFF',
        fontFamily: 'Helvetica Neue',
        fontSize: '30px',
        fontWeight: 700,
      }}>
        {title}
      </div>
      <div style={{display:'flex', justifyContent:'space-between', gap:20, marginTop:20, flexWrap:'wrap'}}>
          {movies.length>0 && movies.map((film, index)=>{
            return <div key={index} style={{borderRadius:12,alignItems:'center', width: 360}} onClick={()=>navigate('/play')} >
              <img loading="lazy" src={film.backdrop_path} alt="" height={190} width={360} style={{ borderTopLeftRadius: 12, borderTopRightRadius:12}} />
             
              <div style={{backgroundColor:'#343434', padding: 12, borderBottomLeftRadius: 12, borderBottomRightRadius:12, marginTop: -12}}>
                <LinesEllipsis 
                style={{
                  color: '#d2d2d2',
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom:12
                }}
                text={film.title}
                  maxLine='1'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
                <div 
                  style={{
                    marginBottom:12
                  }}>{(new Date(film.first_aired).toDateString().slice(3))}</div>
                <LinesEllipsis
                  text={film.overview}
                  maxLine='3'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />  
              </div>
       
            </div>
          })}
      </div>
  </div>
  )
}

export default MovieDetailList