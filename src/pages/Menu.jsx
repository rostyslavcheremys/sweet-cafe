import { useState, useEffect } from "react";

import {
    Loader,
    Categories,
    ItemCards
} from "../components";

import { useGet } from "../hooks";

import { CategoriesAPI, MenuAPI } from "../api";

export const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const {
        data: categories = [],
        isLoading: categoriesLoading,
        error: categoriesError
    } = useGet(() => CategoriesAPI.getAll(), []);

    const {
        data: items,
        isLoading: itemsLoading,
        error: itemsError
    } = useGet(() => selectedCategory
        ? MenuAPI.getByCategory(selectedCategory)
        : Promise.resolve([]), [selectedCategory]
    );

    useEffect(() => {
        if (categories?.length && !selectedCategory) {
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