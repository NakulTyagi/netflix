import React from 'react'
import { useNavigate } from 'react-router-dom';

function TopTen({movies, title}:any) {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: 50, cursor: 'pointer'}}>
      <div style={{
        color: '#FFF',
        fontFamily: 'Helvetica Neue',
        fontSize: '30px',
        fontWeight: 700,
      }}>
        {title}
      </div>
      <div style={{display:'flex',  gap:20, maxWidth: '94%', overflow: 'auto'}}>
          {movies.length>0 && movies.map((film, index)=>{
            return <div key={index} style={{display:'flex', alignItems:'center'}} onClick={()=>navigate('/play')} >
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
              <img loading="lazy" src={film.poster_path} alt="" height={274} width={182} />
            </div>
          })}
      </div>
    </div>  )
}

export default TopTen