import { useState, useEffect } from "react";

export function useFetch(fetchFunction, dependencies = [], transformData = data => data) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetchFunction();
                setData(transformData(res.data));
                console.log(transformData(res.data));
            } catch (err) {
                setError(err);
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, dependencies);

    return { data, loading, error };
}
