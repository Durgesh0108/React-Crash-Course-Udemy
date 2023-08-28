import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const fetchMovieHandler = async () => {
    fetch("https://swapi.dev/api/films/")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const transformedData = data.results.map((movieData) => {
					return {
						id: movieData.episode_id,
						title: movieData.title,
						releaseDate: movieData.release_date,
						openingText: movieData.opening_crawl,
					};
				});
        setMovies(transformedData);
			});
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
