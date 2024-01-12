import React, { useEffect, useState } from 'react'
import movieService from '../../services/movie-service.ts';
import { useLocation } from 'react-router-dom';
import ResponsiveAppBar from '../ResponsiveAppBar.tsx';
import LinesEllipsis from "react-lines-ellipsis";
import { useNavigate } from "react-router-dom";

function Search() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
		getList();
    console.log(state)
	}, [state]);
	const [movies, setMovies] = useState([]);

	const getList = async () => {
		const resp = await movieService.getSearchMovies(state.text);
		setMovies(resp.results);
		console.log(resp)
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
                    src={`http://image.tmdb.org/t/p/w185${film?.poster_path}`}
                    alt=''
            
                    style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, borderRadius:12 }}
                  />

                  {/* <div
                    style={{
                      backgroundColor: "#343434",
                      padding: 12,
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      marginTop: -12,
                    }}
                  >
                    <LinesEllipsis
                      style={{
                        color: "#d2d2d2",
                        fontSize: "24px",
                        fontWeight: 700,
                        marginBottom: 12,
                      }}
                      text={film.title}
                      maxLine='1'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                    />
                    <div
                      style={{
                        marginBottom: 12,
                      }}
                    >
                      {new Date(film.release_date).toDateString().slice(3)}
                    </div>
                    <LinesEllipsis
                      text={film.overview}
                      maxLine='3'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                    />
                  </div> */}
                </div>
              );
            })}
        </div>
      </div>    
    </div>
  )
}

export default Search