import React, { useEffect } from 'react'
import movieService from '../services/movie-service.ts';
import ResponsiveAppBar from './ResponsiveAppBar.tsx';

function Home() {
  useEffect(()=>{},[]);
  const getList = async() =>{
    // const res = await movieService.getMovieTitles();
    // const res = await movieService.getShowsTitles();
    const res = await movieService.getSearchTitles('game');
    console.log(res)
  }
  return (
    <div>
      <ResponsiveAppBar/>
      <button onClick={getList}>list</button>
    </div>
  )
}

export default Home