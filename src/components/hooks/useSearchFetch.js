import { useState, useRef } from 'react';

export const useSearchFetch = (setSearchTerm, history) => {
	const [query, setQuery] = useState('');
	const [gameSystem, setGameSystem] = useState('');
	const searchForm = useRef();

	const handleChange = (event) => {
		setQuery(event.target.value);
	};

	const handleSystemSelect = (event) => {
		setGameSystem(event.target.value);
	};

	const handleSubmit = (event) => {
		searchForm.current.reportValidity();
		event.preventDefault();

		const searchQuery = `${gameSystem} ${query}`;

		setSearchTerm(searchQuery);
		history.push('/results');
	};

	return [gameSystem, searchForm, handleChange, handleSystemSelect, handleSubmit];
};
