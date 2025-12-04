import { useState, useEffect } from "react";

import { Loader } from "../components/Loader/Loader.jsx";
import { Categories } from "../components/Categories/Categories.jsx";
import { ItemCards } from "../components/ItemCards/ItemCards.jsx";

import { useGet } from "../hooks/useGet.js";

import { getMenuItemsByCategory, getCategories } from "../../api.js";

import "../styles/pages.css";

export const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const {
        data: categories = [],
        isLoading: categoriesLoading,
        error: categoriesError
    } = useGet(getCategories, []);

    const { data: items = [], isLoading: itemsLoading, error: itemsError } = useGet(
        () => selectedCategory !== null ? getMenuItemsByCategory(selectedCategory) :
            Promise.resolve([]), [selectedCategory]
    );

    useEffect(() => {
        if (Array.isArray(categories) && categories.length && selectedCategory === null) {
            setSelectedCategory(categories[0].id);
        }
    }, [categories]);

    return (
        <Loader
            isLoading={categoriesLoading || itemsLoading}
            error={categoriesError || itemsError}
            errorText="Failed to load menu!"
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