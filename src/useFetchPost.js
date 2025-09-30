
import { useState } from "react";

export function useFetchPost(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    async function fetchData(JSONData) {
        const headers = {
            "Content-Type": "application/json"
        }
        const token = sessionStorage.getItem("token");
        if (token) {
            headers.authorization = `Bearer ${token}`;
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(JSONData)
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

    return {data, error, fetchData};
}