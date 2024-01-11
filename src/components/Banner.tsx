import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayArrowRounded";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import InfoDialog from "./dialogs/InfoDialog.tsx";
import MovieList from "./MovieList.tsx";
import LinesEllipsis from "react-lines-ellipsis";
import { isMobile } from "react-device-detect";
import Dropdown from "./Dropdown.tsx";

function Banner({ movies, genres = [], genresUpdate }: any) {
	const [movie, setMovie] = useState(null);
	const navigate = useNavigate();
	const [open, setOpen] = React.useState(false);
	const emails = ["username@gmail.com", "user02@gmail.com"];
	const [selectedValue, setSelectedValue] = React.useState(emails[1]);
	const location = useLocation();
	const [genreSelected, setGenreSelected] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value: string) => {
		setOpen(false);
		setSelectedValue(value);
	};

	useEffect(() => {
		setMovie(movies[Math.floor(Math.random() * 30) || 0]);
	}, []);

	return (
		<div>
			{movies && movie && (
				<div>
					<div
						className='banner'
						style={{
							height: isMobile
								? window.screen.height * 0.5
								: window.screen.height * 0.62,
							marginTop: 0,
							width: "100%",
							backgroundImage: `url(${
								isMobile ? movie?.poster_path : movie?.backdrop_path
							})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							position: "relative",
						}}
					></div>
					{location.pathname.slice(1) && !isMobile && (
						<div
							style={{
								position: "absolute",
								top: isMobile ? "auto" : "10%",
								display: "flex",
							}}
						>
							<div
								style={{
									marginLeft: isMobile ? 20 : 100,
									marginRight: 60,
									color: "#FFF",
									fontSize: "56px",
									fontWeight: 500,
								}}
							>
								{location.pathname.slice(1) === "movies"
									? "Movies"
									: "TV Shows"}
							</div>
							<div>
								<Dropdown
									genres={genres}
									selectedValue={(genre) => {
										genresUpdate(genre);
										setGenreSelected(true);
									}}
								/>
							</div>
						</div>
					)}
					<div
						style={{
							position: "absolute",
							top: isMobile ? "auto" : "30%",
							height: isMobile ? 360 : 600,
							marginLeft: isMobile ? 20 : 100,
							marginRight: 20,
							overflow: "hidden",
						}}
					>
						<LinesEllipsis
							text={movie.title}
							maxLine={isMobile ? "1" : "2"}
							ellipsis='...'
							trimRight
							basedOn='letters'
							style={{
								color: "#FFF",
								fontSize: "36px",
								fontWeight: 700,
								textTransform: "uppercase",
							}}
						/>
						<LinesEllipsis
							text={movie.overview}
							maxLine='3'
							ellipsis='...'
							trimRight
							basedOn='letters'
							style={{
								color: "#FFF",
								fontSize: "22px",
								fontWeight: 300,
								marginTop: 40,
								width: isMobile ? "100%" : "40%",
							}}
						/>

						<Button
							component='label'
							variant='contained'
							onClick={() =>
								navigate("/play", { state: { title: movie?.title } })
							}
							style={{
								backgroundColor: "white",
								color: "black",
								marginTop: 44,
								height: isMobile ? 36 : 60,
								width: isMobile ? 120 : 168,
								fontSize: isMobile ? "18px" : "20px",
								fontWeight: 700,
							}}
							startIcon={<PlayIcon style={{ height: 48, width: 48 }} />}
						>
							Play
						</Button>
						{!isMobile && (
							<Button
								component='label'
								variant='contained'
								onClick={handleClickOpen}
								style={{
									backgroundColor: "rgba(255, 255, 255, 0.20)",
									color: "white",
									marginTop: 44,
									height: isMobile ? 40 : 60,
									width: isMobile ? 160 : "auto",
									fontSize: isMobile ? "14px" : "20px",
									fontWeight: 700,
									marginLeft: 8,
								}}
								startIcon={<InfoIcon style={{ height: 32, width: 32 }} />}
							>
								More Info
							</Button>
						)}
						<InfoDialog
							selectedValue={selectedValue}
							movie={movie}
							movies={movies}
							open={open}
							onClose={handleClose}
						/>
					</div>
					{!genreSelected && (
						<div
							style={{
								marginTop: isMobile ? 300 : 0,
								marginLeft: isMobile ? 20 : 100,
							}}
						>
							<MovieList
								movies={movies.slice(0, 10)}
								title={"Popular on Netflix"}
							/>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default Banner;
