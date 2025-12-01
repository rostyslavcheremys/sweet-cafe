import { useState } from "react";

import { Loader } from "../components/Loader/Loader.jsx";
import { Categories } from "../components/Categories/Categories.jsx";
import { ItemCards } from "../components/ItemCards/ItemCards.jsx";

import { useFetch } from "../hooks/useFetch.js";

import { getMenuItems, getCategories } from "../../api.js"

import "../styles/pages.css";

export const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch(
        getCategories,
        [],
        data => data.categories || []
    );

    const { data: items, loading: itemsLoading, error: itemsError } = useFetch(
        getMenuItems,
        [],
        data => data.menu_items || []
    );

    return (
        <Loader
            loading={categoriesLoading || itemsLoading}
            error={categoriesError || itemsError}
            errorText="Failed to load menu!"
        >
            <div className="page">
                <Categories
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <ItemCards
                    items={items}
                    selectedCategory={selectedCategory}
                />
            </div>
        </Loader>
    );
};
