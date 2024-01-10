import React, { useEffect, useState } from 'react';
import './fancode.css';
import fancodeService from '../../services/fancode-service.ts';
import YearMovies from './YearMovies.tsx';
import { isMobile } from 'react-device-detect';
import useDetectScroll from '@smakss/react-scroll-direction';

function FancodeHome() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState<any>()
  const [years, setYears] = useState([2012])

  useEffect(()=>{
    getGenres();
  },[])
  const { scrollPosition } = useDetectScroll();

  useEffect(()=>{
    if(scrollPosition.bottom ===0 && years[years.length-1]<=2023){
      setYears([...years, years[years.length-1]+1]);
      console.log([...years, years[years.length-1]+1])
    }
  },[scrollPosition])

  const getGenres= async()=>{
    const res = await fancodeService.getGenres();
    const movies = await fancodeService.getMovieTitles();
    setGenres(res?.genres);
    console.log(movies);
  }

  return (
    <div>
      <div className='header'  >
        <div className='title'>
          MOVIEFIX
        </div>
        <div className='genrelist' style={{display:'flex', gap:20, overflow: 'auto'}}>
          {genres.map((genre:any)=>{
            return <div onClick={()=>setSelectedGenre(genre)} style={{padding:8, backgroundColor: selectedGenre?.id===genre?.id ? 'red': '#36454F', whiteSpace:'nowrap', borderRadius:4}}>
              <span> {genre?.name}</span>
            </div>
          })}
        </div>
      </div>
      <div>
        {years.map((year)=>{
          return <div style={{position:'relative', padding: isMobile ? 16: 80}}>
            <div style={{color:'white', fontSize: 24, fontWeight: 500, marginBottom: 20}}>{year}</div>
            <YearMovies genre={selectedGenre} releaseYear={year} />
          </div> 
        })}
      </div>
    </div>
  )
}

export default FancodeHome