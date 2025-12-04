import { useState, useEffect } from "react";

export const useGet = (getFunction, dependencies = []) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const result = await getFunction();
                setData(result);
                console.log(result);
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