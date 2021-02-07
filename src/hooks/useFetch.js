import React, { useState, useEffect } from "react";

const useFetch = url => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		setTimeout(() => {
			fetch(url, { signal: abortController.signal })
				.then(response => {
					console.log(response);

					if (!response.ok) throw Error("unable to fetch data");

					return response.json();
				})
				.then(results => {
					console.log(results);

					setData(results);

					setIsLoading(false);

					setError(null);
				})
				.catch(error => {
					if (error.name === "AbortError") {
						console.log("fetch aborted");
					} else {
						setIsLoading(false);

						setError(error.message);
					}
				});
		}, 1000);

		// useEffect clean-up function for handling the unmouted component fetch problem
		return () => abortController.abort();
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
