import { useState, useEffect } from "react";

import { Loader } from "../components/Loader/Loader.jsx";
import { Categories } from "../components/Categories/Categories.jsx";
import { ItemCards } from "../components/ItemCards/ItemCards.jsx";

import { useGet } from "../hooks/useGet.js";

import { CategoriesAPI, MenuAPI } from "../api/index.js";

export const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const {
        data: categories = [],
        isLoading: categoriesLoading,
        error: categoriesError
    } = useGet(() => CategoriesAPI.getAll(), []);

    const {
        data: items = [],
        isLoading: itemsLoading,
        error: itemsError
    } = useGet(() => selectedCategory !== null
            ? MenuAPI.getByCategory(selectedCategory)
            : Promise.resolve([]),
        [selectedCategory]
    );

    useEffect(() => {
        if (categories && categories.length > 0 && selectedCategory === null) {
            setSelectedCategory(categories[0].id);
        }
    }, [categories]);

    return (
        <Loader
            isLoading={categoriesLoading || itemsLoading}
            error={categoriesError || itemsError}
            errorText="Failed to load page!"
        >
            <div className="page">
                <Categories
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <ItemCards items={items} />
            </div>
        </Loader>
    );
};