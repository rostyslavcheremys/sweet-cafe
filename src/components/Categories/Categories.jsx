import {
    Tabs,
    Tab
} from "../../libs/mui.js";

export const Categories = ({ categories = [], selectedCategory, setSelectedCategory }) => {
    const value = categories.findIndex(c => c.id === selectedCategory);

    const handleCategory = (_, newValue) => {
        setSelectedCategory(categories[newValue]?.id || null);
    };

    return (
        <div className="categories">
            <div className="categories__container">
                <Tabs
                    className="categories__tabs"
                    variant="scrollable"
                    value={value >= 0 ? value : 0}
                    scrollButtons
                    allowScrollButtonsMobile
                    onChange={handleCategory}
                >
                    {categories.map(category => (
                        <Tab key={category.id} label={category.name} />
                    ))}
                </Tabs>
            </div>
        </div>
    );
};
