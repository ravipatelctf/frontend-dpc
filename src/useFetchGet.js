
import { useEffect, useState } from "react";

export function useFetchGet(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    async function fetchData() {
        const headers = {
            "Content-Type": "application/json"
        }
        const token = sessionStorage.getItem("token");
        if (token) {
            headers.authorization = `Bearer ${token}`;
        }
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: headers,
            });

            if (!response.ok) {
                setError(true);
            }

            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(true);
        }
    }

    useEffect(() => {
        async function fetcher() {
            await fetchData(url);
        }
        fetcher();
    }, [url]);

    return {data, error, fetchData};
}