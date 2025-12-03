import { useState } from "react";

export const usePost = (postFunction, transformData = data => data) =>{
    const [isLoading, setIsLoading] = useState(false);

    const postData = async (payload) => {
        setIsLoading(true);

        try {
            const response = await postFunction(payload);
            console.log(response.data);
            return transformData(response.data);
        } catch (error) {
            console.error("POST request error:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return { postData, isLoading };
}
