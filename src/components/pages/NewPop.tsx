import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../ResponsiveAppBar.tsx";
import { Spinner } from "react-activity";
import MovieList from "../MovieList.tsx";
import VertList from "../VertList.tsx";
import TopTen from "../TopTen.tsx";
import { isMobile } from "react-device-detect";
import { movieData } from "../../data/staticData.tsx";

function NewPop() {
	useEffect(() => {
		getList();
	}, []);
	const [movies, setMovies] = useState([]);
	const getList = async () => {
		let res = {
			movies: movieData,
			page: 1,
		};
		setMovies(res?.movies);
		// const res = await movieService.getMovieTitles();
		// // const res = await movieService.getShowsTitles();
		// // const res = await movieService.getSearchTitles('game');
		// setMovies(res.movies);
		// console.log(res)
	};

	return (
		<div style={{ background: "black", paddingBottom: 50 }}>
			<ResponsiveAppBar />
			{movies.length > 0 ? (
				<div
					style={{
						marginLeft: isMobile ? 20 : 100,
						marginTop: 100,
						position: "relative",
					}}
				>
					<MovieList movies={movies.slice(0, 10)} title={"New on Netflix"} />

					<TopTen movies={movies.slice(10, 20)} title={"Top Movies in India"} />

					<TopTen movies={movies.slice(20, 30)} title={"Top Shows in India"} />

					<MovieList movies={movies.slice(30, 40)} title={"Coming Next Week"} />

					<VertList movies={movies.slice(40, 50)} title={"Worth the Wait"} />
				</div>
			) : (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "10%",
					}}
				>
					<Spinner color='red' />
				</div>
			)}
		</div>
	);
}

export default NewPop;
