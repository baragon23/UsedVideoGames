import { useState } from 'react';

export const useGetPlatforms = () => {
	const [platforms, setPlatforms] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getPlatforms = async () => {
		const endpoint = `https://api.rawg.io/api/platforms?key=${process.env.REACT_APP_RAWG_KEY}`;

		setLoading(true);
		setError(false);

		try {
			let response = await fetch(endpoint);
			response = await response.json();
			let myPlatforms = response.results;

			myPlatforms.sort((platform1, platform2) => {
				if (platform1.name < platform2.name) {
					return -1;
				}
				if (platform1.name > platform2.name) {
					return 1;
				}
				return 0;
			});

			// remove macOS and iOS from results
			myPlatforms = removeByName('Android', myPlatforms);
			myPlatforms = removeByName('iOS', myPlatforms);
			myPlatforms = removeByName('Linux', myPlatforms);
			myPlatforms = removeByName('macOS', myPlatforms);

			setPlatforms(myPlatforms);
			console.log(myPlatforms);
		} catch (error) {
			setError(true);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const removeByName = (platformName, platforms) => {
		return platforms.filter((platform) => platform.name !== platformName);
	};

	return [{ platforms, setPlatforms, loading, setLoading, error, setError }, getPlatforms];
};
