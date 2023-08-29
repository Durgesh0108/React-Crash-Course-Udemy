import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [ movies, setMovies ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false)
	
	const fetchMovieHandler = async () =>
	{
		setIsLoading(true)
		const response = await fetch("https://swapi.dev/api/film/");
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
		setIsLoading(false)
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{!isLoading && movies.length === 0 && <p>Found No Movies</p>}
				{isLoading && <p>Loading...</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
