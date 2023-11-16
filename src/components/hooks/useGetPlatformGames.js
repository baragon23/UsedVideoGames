import { useState } from 'react';

export const useGetPlatformGames = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [games, setGames] = useState();

	const getPlatformGames = async (platformId) => {
		const endpoint = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}
			&platforms=${platformId}&ordering=name&exclude_additions=true&page_size=125`;

		setLoading(true);
		setError(false);

		try {
			let response = await fetch(endpoint);
			response = await response.json();
			let myGames = response.results;

			setGames(myGames);
			console.log(myGames);
		} catch (error) {
			setError(true);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return [{ games, setGames, loading, setLoading, error, setError }, getPlatformGames];
};
