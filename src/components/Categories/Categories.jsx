import { useState } from "react";

import { Tabs, Tab } from "@mui/material";

import "./Categories.css";

export const Categories = () => {
    const [value, setValue] = useState(0);

    const handleValue = (event, newValue) => {
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
                    onChange={handleValue}
                >
                    <Tab label="Drinks" />
                    <Tab label="Ice Creams" />
                    <Tab label="Donuts" />
                    <Tab label="Cakes" />
                    <Tab label="Cupcakes" />
                </Tabs>
            </div>
        </div>
    );
};
