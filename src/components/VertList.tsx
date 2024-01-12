import React from "react";
import { useNavigate } from "react-router-dom";

function VertList({ movies, title }: any) {
	const navigate = useNavigate();

	return (
		<div style={{ marginTop: 50, cursor: "pointer" }}>
			<div
				style={{
					color: "#FFF",
					fontFamily: "Helvetica Neue",
					fontSize: "30px",
					fontWeight: 700,
				}}
			>
				{title}
			</div>
			<div
				style={{
					display: "flex",
					gap: 20,
					maxWidth: "94%",
					marginTop: 20,
					overflow: "auto",
				}}
			>
				{movies.length > 0 &&
					movies.map((film, index) => {
						return (
							<div
								key={index}
								style={{ display: "flex", alignItems: "center" }}
								onClick={() =>
									navigate("/play", { state: { title: film.title } })
								}
							>
								<img
									loading='lazy'
									src={film.poster_path}
									alt=''
									height={696}
									width={410}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default VertList;
