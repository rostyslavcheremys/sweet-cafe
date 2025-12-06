import { useState } from "react";

export const usePost = (postFunction, transformData = data => data) =>{
    const [isLoading, setIsLoading] = useState(false);

    const postData = async (payload) => {
        setIsLoading(true);

        try {
            const response = await postFunction(payload);
            const data = response?.data ?? response;
            console.log(data);
            return transformData(data);
        } catch (error) {
            console.error("POST request error:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return { postData, isLoading };
}
