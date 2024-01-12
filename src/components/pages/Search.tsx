import React, { useEffect, useState } from 'react'
import movieService from '../../services/movie-service.ts';
import { useLocation } from 'react-router-dom';
import ResponsiveAppBar from '../ResponsiveAppBar.tsx';
import { useNavigate } from "react-router-dom";
import useDetectScroll from '@smakss/react-scroll-direction';

function Search() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [page, setPage]= useState(1);
  const [totalPages, settotalPages] = useState(0);
	const [movies, setMovies] = useState<any>([]);
  const [text, setText] = useState('');

  useEffect(() => {
		getList();
	}, [state]);
  const { scrollPosition } = useDetectScroll();

	useEffect(() => {
    console.log(scrollPosition)
		if (scrollPosition.bottom <= 0 && page<totalPages) {
      getList(page+1);
			setPage(page + 1);
		}
	}, [scrollPosition]);

	const getList = async (pageNo=1) => {
    let movieList = movies;
    if(text!==state.text){
      movieList = [];
      setPage(1);
      pageNo=1;
    }
		const resp = await movieService.getSearchMovies(state.text, 'popularity', 2023, pageNo);
    setText(state.text);
		setMovies([...movieList,...resp.results]);
    settotalPages(resp.total_pages);
	}
  return (
    <div>
      <ResponsiveAppBar/>
      <div
        style={{
          display:'flex',
          justifyContent:'center',
          padding: 20,
          marginTop: 50,
          cursor: "pointer",
          color: "#d2d2d2",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            marginTop: 20,
            flexWrap: "wrap",
          }}
        >
          {movies.length > 0 &&
            movies.map((film, index) => {
              return (
                <div
                  key={index}
                  style={{ borderRadius: 12, alignItems: "center",}}
                  onClick={() =>
                    navigate("/play", { state: { title: film.title } })
                  }
                >
                  <img
                    loading='lazy'
                    src={film?.poster_path ? `http://image.tmdb.org/t/p/w185${film?.poster_path}` : `http://image.tmdb.org/t/p/w185${film?.backdrop_path}`}
                    alt=''
            
                    style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, borderRadius:12 }}
                  />

                </div>
              );
            })}
        </div>
      </div>    
    </div>
  )
}

export default Search