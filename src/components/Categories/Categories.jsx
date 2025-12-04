import { Tabs, Tab } from "@mui/material";

import "./Categories.css";

export const Categories = ({ categories = [], selectedCategory, setSelectedCategory }) => {

    const value = selectedCategory
        ? categories.findIndex(c => c.id === selectedCategory)
        : 0;

    const handleValue = (_, newValue) => {
        const categoryId = categories[newValue]?.id || null;
        setSelectedCategory(categoryId);
    };

    return (
        <div className="categories">
            <div className="categories__container">
                <Tabs
                    className="categories__tabs"
                    variant="scrollable"
                    value={value}
                    scrollButtons
                    allowScrollButtonsMobile
                    onChange={handleValue}
                >
                    {categories.map(category => (
                        <Tab key={category.id} label={category.name} />
                    ))}
                </Tabs>
            </div>
        </div>
    );
};