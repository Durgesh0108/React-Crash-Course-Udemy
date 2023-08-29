import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovieHandler = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch("https://swapi.dev/api/films/ ");

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}
			const data = await response.json();

			const transformedData = data.results.map((movieData) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					releaseDate: movieData.release_date,
					openingText: movieData.opening_crawl,
				};
			});
			setMovies(transformedData);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	};

	let content = <p>Found No Movies.</p>;

	if (movies.length) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>
				{content}
			</section>
		</React.Fragment>
	);
}

export default App;
