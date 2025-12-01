import { useState } from "react";

import { Tabs, Tab } from "@mui/material";

import "./Categories.css";

export const Categories = ({ categories, setSelectedCategory }) => {
    const [value, setValue] = useState(0);


    const handleValue = (event, newValue) => {
        setValue(newValue);
        setSelectedCategory(categories[newValue]?.id || null);
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
                    {categories.map((category, index) => (
                        <Tab key={category.id || index} label={category.name} />
                    ))}
                </Tabs>
            </div>
        </div>
    );
};
