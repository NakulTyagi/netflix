import React from 'react'

function VertList({movies, title}:any) {
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
      <div style={{display:'flex',  gap:20, maxWidth: '90%', marginTop:20, overflow: 'auto'}}>
          {movies.length>0 && movies.map((film, index)=>{
            return <div key={index} style={{display:'flex', alignItems:'center'}} >
              <img loading="lazy" src={film.poster_path} alt="" height={696} width={410} />
            </div>
          })}
      </div>
    </div>
    )
}

export default VertList