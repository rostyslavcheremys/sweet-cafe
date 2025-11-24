import { useState } from "react";
import { ItemDetails } from "/src/components/ItemDetails/ItemDetails.jsx";

import "./ItemCards.css";

export const ItemCards = () => {
    const [selectedItem, setSelectedItem] = useState(null); // обраний продукт
    const [open, setOpen] = useState(false);

    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    return (
        <>
            <div className="item-cards">
                {items.map((item, index) => (
                    <div
                        className="item-card"
                        key={index}
                        onClick={() => handleOpen(item)}
                    >
                        <div className="card">
                            <img className="card-image" src={item.image} alt={item.title} />
                            <div className="card-content">
                                <label className="card-label">{item.title}</label>
                                <label className="card-label">{`$${item.price}`}</label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <ItemDetails
                    open={open}
                    onClose={handleClose}
                    item={selectedItem}
                />
            )}
        </>
    );
};

const items = [
    {
        title: "Classic Layered Latte",
        price: "3.75",
        image: "public/images/drinks/classic-layered-latte.jpg",
        size: "400",
        description: "A perfectly layered latte with distinct strata of milk, espresso, and foam, topped with a dusting of cinnamon."
    },
    {
        title: "Creamy Cafe Latte",
        price: "3.50",
        image: "public/images/drinks/creamy-cafe-latte.jpg",
        size: "400",
        description: "A smooth and creamy cafe latte, richly textured with a generous swirl of whipped cream and a sprinkle of cocoa powder."
    },
    {
        title: "Three-Tiered Macchiato",
        price: "4.00",
        image: "public/images/drinks/three-tiered-macchiato.jpg",
        size: "400",
        description: "An elegantly layered macchiato showcasing clear divisions of milk, rich espresso, and velvety foam, finished with a hint of cinnamon."
    },
    {
        title: "Chocolate Decadence Drink",
        price: "4.25",
        image: "public/images/drinks/chocolate-decadence-drink.jpg",
        size: "400",
        description: "An indulgent chocolate drink with rich chocolate syrup streaking the glass, topped with whipped cream, chocolate shavings, and cocoa powder."
    },
    {
        title: "Dark Chocolate Frappe",
        price: "4.10",
        image: "public/images/drinks/dark-chocolate-frappe.jpg",
        size: "400",
        description: "A deep, rich dark chocolate frappe with a cool, creamy texture, finished with whipped cream and a dusting of cocoa."
    },
    {
        title: "Toasted Marshmallow Latte",
        price: "4.50",
        image: "public/images/drinks/toasted-marshmallow-latte.jpg",
        size: "400",
        description: "A cozy latte crowned with a heap of perfectly toasted mini marshmallows, offering a sweet, smoky aroma."
    },
    {
        title: "Caramel Swirl Delight",
        price: "4.20",
        image: "public/images/drinks/caramel-swirl-delight.jpg",
        size: "400",
        description: "A beautifully layered coffee drink with generous swirls of caramel cascading down the sides, topped with whipped cream and caramel drizzle."
    },
    {
        title: "Simple Caramel Drizzle",
        price: "3.90",
        image: "public/images/drinks/simple-caramel-drizzle.jpg",
        size: "400",
        description: "A comforting coffee drink with a base of milk and coffee, generously topped with whipped cream and a classic caramel drizzle."
    },
    {
        title: "Extra Caramel Indulgence",
        price: "4.30",
        image: "public/images/drinks/extra-caramel-indulgence.jpg",
        size: "400",
        description: "An ultimate caramel experience, featuring thick caramel drizzles inside and on top of a rich coffee base with whipped cream."
    },
    {
        title: "Minimalist Mocha",
        price: "3.80",
        image: "public/images/drinks/minimalist-mocha.jpg",
        size: "400",
        description: "A sleek and sophisticated mocha, with just a hint of chocolate and a perfect dollop of whipped cream on top."
    },
    {
        title: "Caramel Macchiato Twist",
        price: "4.15",
        image: "public/images/drinks/caramel-macchiato-twist.jpg",
        size: "400",
        description: "A beautifully layered drink with espresso and milk, topped with thick foam, caramel drizzle, and a dusting of cocoa powder."
    },
    {
        title: "Dark Mocha Float",
        price: "4.30",
        image: "public/images/drinks/dark-mocha-float.jpg",
        size: "400",
        description: "A deep, rich dark coffee base layered with milk, crowned with a large scoop of sweet foam and a generous dusting of cocoa."
    },
    {
        title: "Chocolate Chip Frappe",
        price: "4.75",
        image: "public/images/drinks/chocolate-chip-frappe.jpg",
        size: "400",
        description: "A vanilla-based frappe or milkshake infused with crushed dark chocolate cookies/chips, topped with whipped cream and chocolate pieces."
    },
    {
        title: "Hazelnut Latte",
        price: "3.65",
        image: "public/images/drinks/hazelnut-latte.jpg",
        size: "400",
        description: "A comforting blend of coffee and milk, topped with a swirl of whipped cream and a sprinkle of cinnamon or hazelnut powder."
    },
    {
        title: "Whipped Milk Shake",
        price: "3.50",
        image: "public/images/drinks/whipped-milk-shake.jpg",
        size: "400",
        description: "A creamy and smooth vanilla or white chocolate milkshake, simply topped with a perfect swirl of plain whipped cream."
    },
    {
        title: "Triple Chocolate Layer",
        price: "4.95",
        image: "public/images/drinks/triple-chocolate-layer.jpg",
        size: "400",
        description: "An ultra-decadent drink with rich layers of coffee and chocolate milk, topped with whipped cream, chocolate shavings, and dark chocolate squares."
    },
    {
        title: "Simple Sweet Milk",
        price: "3.25",
        image: "public/images/drinks/simple-sweet-milk.jpg",
        size: "400",
        description: "A classic sweet coffee drink, elegantly layered with milk, espresso, and foam, perfect for a subtle caramel flavor."
    },
    {
        title: "Espresso Cream Fusion",
        price: "4.40",
        image: "public/images/drinks/espresso-cream-fusion.jpg",
        size: "400",
        description: "A visually stunning layered drink with a sharp espresso shot melting into cold milk, topped with whipped cream."
    },
    {
        title: "Mocha Dream Whip",
        price: "4.55",
        image: "public/images/drinks/mocha-dream-whip.jpg",
        size: "400",
        description: "A rich, chocolate-flavored coffee drink, fully blended and topped with a generous serving of whipped cream and cocoa dust."
    },
    {
        title: "Layered Cream Coffee",
        price: "3.80",
        image: "public/images/drinks/layered-cream-coffee.jpg",
        size: "400",
        description: "A classic layered coffee drink with milk, coffee, and a thick layer of whipped cream, drizzled with caramel sauce."
    },




    {
        title: "Cherry Hot Fudge Sundae",
        price: "5.50",
        image: "public/images/ice-creams/cherry-hot-fudge-sundae.jpg",
        size: "100",
        description: "A classic vanilla sundae featuring hot fudge sauce, whipped cream, and crowned with two bright red maraschino cherries."
    },
    {
        title: "Forest Berry Swirl",
        price: "6.25",
        image: "public/images/ice-creams/forest-berry-swirl.jpg",
        size: "100",
        description: "A rich vanilla ice cream layered with cookies, topped with whipped cream, dark berry sauce, fresh raspberries, and blackberries."
    },
    {
        title: "Raspberry Brownie Bomb",
        price: "5.75",
        image: "public/images/ice-creams/raspberry-brownie-bomb.jpg",
        size: "100",
        description: "Vanilla ice cream layered with brownie chunks, drenched in chocolate sauce, topped with whipped cream and fresh raspberries."
    },
    {
        title: "Caramel Drizzle Dream",
        price: "5.20",
        image: "public/images/ice-creams/caramel-drizzle-dream.jpg",
        size: "100",
        description: "A large serving of vanilla ice cream with generous swirls of smooth caramel syrup dripping down the glass."
    },
    {
        title: "Salted Caramel Scoop",
        price: "5.80",
        image: "public/images/ice-creams/salted-caramel-scoop.jpg",
        size: "100",
        description: "Three scoops of creamy, rich caramel ice cream, lightly drizzled with caramel sauce for an intense, savory-sweet flavour."
    },
    {
        title: "Mocha Cookie Crunch",
        price: "6.50",
        image: "public/images/ice-creams/mocha-cookie-crunch.jpg",
        size: "100",
        description: "Vanilla and coffee ice cream, layered with cookie pieces, drizzled with chocolate sauce, and topped with crunchy chunks."
    },
    {
        title: "Chocolate Hazelnut Heaven",
        price: "5.99",
        image: "public/images/ice-creams/chocolate-hazelnut-heaven.jpg",
        size: "100",
        description: "Rich chocolate ice cream topped with chocolate drizzle, hazelnut pieces, and dark chocolate shavings."
    },
    {
        title: "Cookies and Cream Delight",
        price: "5.45",
        image: "public/images/ice-creams/cookies-and-cream-delight.jpg",
        size: "100",
        description: "Classic vanilla ice cream generously mixed with dark chocolate cookie chunks, served in a tall glass."
    },
    {
        title: "Strawberry Cheesecake",
        price: "6.10",
        image: "public/images/ice-creams/strawberry-cheesecake.jpg",
        size: "100",
        description: "Strawberry ice cream layered with syrup, topped with whipped cream, nut crumble, and fresh, ripe strawberry halves."
    },
    {
        title: "Mint Chocolate Chip Sundae",
        price: "5.65",
        image: "public/images/ice-creams/mint-chocolate-chip-sundae.jpg",
        size: "100",
        description: "Mint-flavored ice cream marbled with chocolate syrup, topped with whipped cream, chocolate chips, and fresh mint leaves."
    },





    {
        title: "Strawberry Mallow",
        price: "2.99",
        image: "public/images/donuts/strawberry-mallow.jpg",
        size: "100",
        description: "A classic soft donut covered in a bright pink strawberry glaze and decorated with delicate stripes of white vanilla drizzle."
    },
    {
        title: "Chocolate Truffle Crunch",
        price: "3.25",
        image: "public/images/donuts/chocolate-truffle-crunch.jpg",
        size: "100",
        description: "A rich chocolate donut featuring a thick layer of glossy dark glaze, generously coated with crispy chocolate and crimson-red sprinkles."
    },
    {
        title: "Tropical Coconut Dream",
        price: "2.75",
        image: "public/images/donuts/tropical-coconut-dream.jpg",
        size: "100",
        description: "A vanilla-glazed donut completely covered in fluffy white coconut shavings and hints of lightly toasted flakes for a tropical flavor."
    },
    {
        title: "Pistachio Matcha Delight",
        price: "3.49",
        image: "public/images/donuts/pistachio-matcha-delight.jpg",
        size: "100",
        description: "An original donut with a vibrant lime-green glaze, offering a subtle blend of pistachio and matcha flavor, topped with chopped pistachios."
    },
    {
        title: "Strawberry Pistachio Fusion",
        price: "3.75",
        image: "public/images/donuts/strawberry-pistachio-fusion.jpg",
        size: "100",
        description: "An elegant donut with a light pink glaze, adorned with fresh strawberry slices and a crunchy topping of finely crushed pistachios."
    },
    {
        title: "Halloween Spider Web",
        price: "3.99",
        image: "public/images/donuts/halloween-spider-web.jpg",
        size: "100",
        description: "A festive, dark chocolate-glazed donut decorated with a white spiderweb pattern, orange drizzles, and classic yellow/white Candy Corn pieces."
    },
    {
        title: "Double Choco Zebra",
        price: "3.15",
        image: "public/images/donuts/double-choco-zebra.jpg",
        size: "100",
        description: "A striped donut with a white vanilla glaze base and dark chocolate drizzle, finished with a generous layer of mini chocolate crispies."
    },
    {
        title: "Glamour Sparkle",
        price: "3.50",
        image: "public/images/donuts/glamour-sparkle.jpg",
        size: "100",
        description: "An elegant donut featuring a glossy dark chocolate glaze, decorated with a glamorous sprinkle mix of pink, white, and golden sugar pearls."
    },
    {
        title: "Strawberry Fountain",
        price: "3.60",
        image: "public/images/donuts/strawberry-fountain.jpg",
        size: "100",
        description: "A sweet donut with a bubblegum-pink glaze, beautifully garnished with slices of fresh strawberries and multi-colored, shiny sprinkles."
    },
    {
        title: "Autumn Ghost Swirl",
        price: "3.10",
        image: "public/images/donuts/autumn-ghost-swirl.jpg",
        size: "100",
        description: "A donut with a bright white vanilla glaze, contrasted by orange and dark chocolate drizzles, and topped with autumn-themed sprinkles."
    },
    {
        title: "Sea Salt Caramel",
        price: "3.55",
        image: "public/images/donuts/sea-salt-caramel.jpg",
        size: "100",
        description: "A decadent donut with a smooth, glossy caramel glaze, drizzled with extra caramel and sprinkled with crunchy sea salt flakes."
    },
    {
        title: "Rainbow Explosion",
        price: "3.99",
        image: "public/images/donuts/rainbow-explosion.jpg",
        size: "100",
        description: "An eye-catching donut with a vibrant rainbow-colored glaze, topped with white frosting stripes and a generous mix of multi-colored sprinkles."
    },
    {
        title: "White Chocolate Raspberry",
        price: "4.15",
        image: "public/images/donuts/white-chocolate-raspberry.jpg",
        size: "100",
        description: "A luxurious donut covered in creamy white chocolate glaze, elegantly decorated with fresh raspberries and pieces of raspberry preserve."
    },
    {
        title: "Purple Passion",
        price: "2.89",
        image: "public/images/donuts/purple-passion.jpg",
        size: "100",
        description: "A simple yet bold donut featuring a smooth, rich purple glaze (like blueberry or lavender) and covered entirely in colorful candy sprinkles."
    },
    {
        title: "Cosmic Blue Pecan",
        price: "4.50",
        image: "public/images/donuts/cosmic-blue-pecan.jpg",
        size: "100",
        description: "An exotic donut with a glittering, swirling blue glaze, reminiscent of a galaxy, and scattered with crunchy chopped pecans or walnuts."
    },
    {
        title: "Salted Butterscotch",
        price: "3.35",
        image: "public/images/donuts/salted-butterscotch.jpg",
        size: "100",
        description: "A gourmet donut with a deeply rich, golden butterscotch glaze, finished with large flakes of decorative coarse sea salt."
    },
    {
        title: "Lemon Sparkle",
        price: "2.99",
        image: "public/images/donuts/lemon-sparkle.jpg",
        size: "100",
        description: "A zesty donut with a bright, sunny lemon-yellow glaze, finished with a mix of small, elegant gold and white sugar pearls."
    },
    {
        title: "Cherry Glaze Swirl",
        price: "2.75",
        image: "public/images/donuts/cherry-glaze-swirl.jpg",
        size: "100",
        description: "A simple, shiny donut with a vibrant cherry-red glaze, decorated with thick, flowing white vanilla cream stripes."
    },
    {
        title: "White Chocolate Toffee",
        price: "3.15",
        image: "public/images/donuts/white-chocolate-toffee.jpg",
        size: "100",
        description: "A classic white vanilla-glazed donut, contrasted with dark chocolate drizzles and topped with crunchy, golden toffee bits."
    },
    {
        title: "Cookies and Cream",
        price: "3.85",
        image: "public/images/donuts/cookies-and-cream.jpg",
        size: "100",
        description: "A sweet donut with a smooth white glaze, dark chocolate drizzles, and crushed dark chocolate sandwich cookies for a 'Cookies & Cream' effect."
    },








    {
        title: "Strawberry Dream",
        price: "3.50",
        image: "public/images/cupcakes/strawberry-dream.jpg",
        size: "100",
        description: "A delicate vanilla cupcake topped with sweet pink strawberry buttercream and garnished with a glossy fresh strawberry."
    },
    {
        title: "Decadent Chocolate Swirl",
        price: "3.75",
        image: "public/images/cupcakes/decadent-chocolate-swirl.jpg",
        size: "100",
        description: "A rich chocolate cupcake crowned with a tall swirl of velvety chocolate frosting and scattered with dark chocolate shavings."
    },
    {
        title: "Blueberry Delight",
        price: "3.60",
        image: "public/images/cupcakes/blueberry-delight.jpg",
        size: "100",
        description: "A light vanilla cupcake topped with pastel purple blueberry buttercream and a generous pile of fresh, ripe blueberries."
    },
    {
        title: "Rainbow Magic",
        price: "4.15",
        image: "public/images/cupcakes/rainbow-magic.jpg",
        size: "100",
        description: "A vanilla cupcake featuring a mesmerizing spiral of brightly colored rainbow buttercream, finished with tiny sugar sprinkles."
    },
    {
        title: "Electric Blue Velvet",
        price: "3.90",
        image: "public/images/cupcakes/electric-blue-velvet.jpg",
        size: "100",
        description: "A dark chocolate cupcake paired with a striking swirl of bright blue frosting, lightly dusted with shimmering sugar crystals."
    },
    {
        title: "Red Velvet Classic",
        price: "3.85",
        image: "public/images/cupcakes/red-velvet-classic.jpg",
        size: "100",
        description: "The iconic Red Velvet cupcake, topped with rich cream cheese frosting and sprinkled with crimson cake crumbs."
    },
    {
        title: "Cookies and Cream King",
        price: "4.20",
        image: "public/images/cupcakes/cookies-and-cream-king.jpg",
        size: "100",
        description: "A dark chocolate cupcake with white vanilla buttercream, dark chocolate drizzle, and a whole chocolate sandwich cookie on top."
    },
    {
        title: "Cinnamon Spice Latte",
        price: "3.70",
        image: "public/images/cupcakes/cinnamon-spice-latte.jpg",
        size: "100",
        description: "A vanilla or spice cupcake topped with coffee-flavored buttercream, dusted with cinnamon powder and adorned with a cinnamon stick."
    },
    {
        title: "Coconut Snow Cap",
        price: "3.55",
        image: "public/images/cupcakes/coconut-snow-cap.jpg",
        size: "100",
        description: "A vanilla cupcake with a tall swirl of pure white vanilla frosting, generously covered in fluffy white coconut flakes."
    },
    {
        title: "Matcha Green Tea",
        price: "4.00",
        image: "public/images/cupcakes/matcha-green-tea.jpg",
        size: "100",
        description: "A flavorful green tea cupcake topped with a vibrant green matcha-infused buttercream swirl."
    },
    {
        title: "Mocha Almond Fudge",
        price: "4.10",
        image: "public/images/cupcakes/mocha-almond-fudge.jpg",
        size: "100",
        description: "A rich chocolate cupcake with coffee-flavored buttercream, decorated with chocolate pieces, coffee beans, and chocolate chips."
    },
    {
        title: "Galaxy Unicorn Swirl",
        price: "4.50",
        image: "public/images/cupcakes/galaxy-unicorn-swirl.jpg",
        size: "100",
        description: "A vanilla cupcake topped with shimmering, marbled pink, blue, and purple frosting, sprinkled with edible glitter for a mystical effect."
    },
    {
        title: "Salted Toffee Caramel",
        price: "3.95",
        image: "public/images/cupcakes/salted-toffee-caramel.jpg",
        size: "100",
        description: "A spiced or vanilla cupcake with a light caramel buttercream, generously coated with crunchy, buttery toffee bits."
    },
    {
        title: "Valentine's Heart",
        price: "4.00",
        image: "public/images/cupcakes/valentine's-heart.jpg",
        size: "100",
        description: "A dark chocolate cupcake with soft pink frosting, topped with red and pink sprinkles and a decorative candy heart."
    },
    {
        title: "Lemon Meringue Cloud",
        price: "4.25",
        image: "public/images/cupcakes/lemon-meringue-cloud.jpg",
        size: "100",
        description: "A lemon or vanilla cupcake topped with a tall swirl of glossy, toasted Italian meringue (marshmallow frosting)."
    },
    {
        title: "Choco-Almond Crunch",
        price: "4.30",
        image: "public/images/cupcakes/choco-almond-crunch.jpg",
        size: "100",
        description: "A chocolate or coffee cupcake with a caramel/vanilla frosting, adorned with dark chocolate shards and slivered almonds."
    },
    {
        title: "Banana Split",
        price: "3.75",
        image: "public/images/cupcakes/banana-split.jpg",
        size: "100",
        description: "A vanilla cupcake with bright yellow banana-flavored frosting, topped with a slice of fresh banana glazed with syrup."
    },
    {
        title: "Maraschino Cherry Kiss",
        price: "3.65",
        image: "public/images/cupcakes/maraschino-cherry-kiss.jpg",
        size: "100",
        description: "A delicate pink-frosted cupcake, sprinkled with pink sugar and crowned with a vibrant red candied maraschino cherry."
    },
    {
        title: "Raspberry Jam Delight",
        price: "4.40",
        image: "public/images/cupcakes/raspberry-jam-delight.jpg",
        size: "100",
        description: "A vanilla cupcake with a layer of tart raspberry jam under a pink swirl of frosting, garnished with fresh raspberries."
    },
    {
        title: "Autumn Spice Halloween",
        price: "4.20",
        image: "public/images/cupcakes/autumn-spice-halloween.jpg",
        size: "100",
        description: "A chocolate cupcake with white and bright orange frosting, heavily decorated with chocolate chips and colorful seasonal sprinkles."
    }
];