import { useState } from "react";

import { Loader } from "../components/Loader/Loader.jsx";
import { Categories } from "../components/Categories/Categories.jsx";
import { ItemCards } from "../components/ItemCards/ItemCards.jsx";

import { useGet } from "../hooks/useGet.js";

import { getMenuItems, getCategories } from "../../api.js";

import "../styles/pages.css";

export const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const { data: categories, isLoading: categoriesLoading, error: categoriesError } = useGet(
        getCategories,
        [],
        data => data.categories || []
    );

    const { data: items, isLoading: itemsLoading, error: itemsError } = useGet(
        getMenuItems,
        [],
        data => data.menu_items || []
    );

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
                <ItemCards
                    items={items}
                    selectedCategory={selectedCategory}
                />
            </div>
        </Loader>
    );
};
