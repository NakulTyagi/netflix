import React, { useEffect, useState } from "react";
import fancodeService from "../../services/fancode-service.ts";
import { useNavigate } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

function YearMovies({ releaseYear, genre }: any) {
	const [movies, setMovies] = useState([]);
	const [allMovies, setAllMovies] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		getMovies();
	}, []);

	useEffect(() => {
		if (allMovies && allMovies.length > 0) {
			filterbyGenre(allMovies);
		}
	}, [genre]);

	const getMovies = async () => {
		console.log(releaseYear);
		const res = await fancodeService.getMovieTitles(
			"popularity",
			releaseYear,
			1
		);
		setMovies(res?.results);
		setAllMovies(res?.results);
		filterbyGenre(res?.results);
	};

	const filterbyGenre = (movies) => {
		if (genre && genre?.name.toLowerCase() !== "all") {
			const result = movies;
			setMovies(result.filter((movie) => movie?.genre_ids?.includes(genre.id)));
		}
	};
	return (
		<div>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "flex-start",
					gap: 36,
					color: "white",
				}}
			>
				{movies.length > 0 ? (
					movies.map((movie, index) => {
						return (
							<div
								key={index}
								style={{
									display: "flex",
									position: "relative",
									cursor: "pointer",
									backgroundRepeat: "no-repeat",
									backgroundSize: "contain",
									backgroundImage: `url( http://image.tmdb.org/t/p/w185${movie?.poster_path})`,
									minHeight: 200,
									width: 140,
									flexDirection: "column",
									alignItems: "center",
									overflowX: "hidden",
								}}
								onClick={() =>
									navigate("/play", { state: { title: movie?.title } })
								}
							>
								<div style={{ position: "absolute", bottom: 8, left: 10 }}>
									<LinesEllipsis
										text={movie.title}
										maxLine='1'
										ellipsis='...'
										trimRight
										basedOn='words'
										style={{
											color: "#FFF",
											fontSize: "16px",
											fontWeight: 700,
											marginTop: 20,
											maxWidth: 120,
											marginBottom: 12,
										}}
									/>
									<div
										style={{
											color: "#FFF",
											fontSize: "16px",
											fontWeight: 500,
											maxWidth: 120,
										}}
									>
										{movie?.vote_average}
									</div>
								</div>
							</div>
						);
					})
				) : (
					<div>No related Movies</div>
				)}
			</div>
		</div>
	);
}

export default YearMovies;
