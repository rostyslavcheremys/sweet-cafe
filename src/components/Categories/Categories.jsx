import { useState } from "react";

import { Tabs, Tab } from "@mui/material";

import "./Categories.css";

export const Categories = () => {
    const [value, setValue] = useState(0);

    const handleValueChange = (event, newValue) => {
        setValue(newValue);
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
                    onChange={handleValueChange}
                >
                    <Tab label="Combo Offers" />
                    <Tab label="Hot Drinks" />
                    <Tab label="Cold Drinks" />
                    <Tab label="Donuts" />
                    <Tab label="Cakes" />
                    <Tab label="Cupcakes" />
                    <Tab label="Croissants" />
                </Tabs>
            </div>
        </div>
    );
};
