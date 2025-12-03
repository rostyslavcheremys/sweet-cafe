import { useState, useEffect } from "react";

export const useGet = (getFunction, dependencies = [], transformData = data => data) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await getFunction();
                setData(transformData(response.data));
                console.log(transformData(response.data));
            } catch (error) {
                setError(error);
                console.error("GET request error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, dependencies);

    return { data, isLoading, error };
}