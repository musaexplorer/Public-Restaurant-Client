import { Helmet } from "react-helmet-async";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BBQHOUSE || MENU</title>
            </Helmet>
            <div className="bg-[url('https://i.ibb.co.com/T27FjZZ/delicious-meal-table.jpg')] h-40 bg-cover my-5 pt-7 text-white font-bold text-center text-4xl font-serif">
                <div className="pb-10 pt-7 px-36 w-full bg-slate-700 bg-opacity-45">
                    <p>Our Food Menus</p>
                </div>
            </div>

            <div>
                <h2 className="text-4xl bg-gradient-to-r from-gray-700 to-gray-500 py-5 text-white mx-3 font-bold font-serif text-center mt-20 mb-10">Chicken</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/0KsfcD2/Smoked-Chicken-Quarters.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Smoked Chicken Quarters</p>
                                <p className="font-medium text-xl text-orange-500">$12.50</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">Juicy, jumbo-sized chicken quarters, marinated and smoked <br /> to perfection. Known for its succulent texture and deeply infused smoky flavor.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/ZMyFMqR/Grilled-Thai-Coconut-Chicken-Skewers.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Grilled Szechuan Chicken Skewers</p>
                                <p className="font-medium text-xl text-orange-500">$10.50</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">Tender chicken marinated in a spicy Szechuan peppercorn sauce, grilled to perfection. These skewers pack a punch with the signature numbing heat of Szechuan cuisine, balanced with a BBQHOUSE smoky twist.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/j69Vwf9/Sweet-sour-spicy-Korean-fried-chicken-Yangnyeom-tongdak.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Spicy Chickens</p>
                                <p className="font-medium text-xl text-orange-500">$12.99</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">Chicken stir-fried with Szechuan peppercorns, dried chilies, and vegetables. This dish offers a mouth-tingling heat combined with savory flavors, delivering a signature spicy punch.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl bg-gradient-to-r from-gray-700 to-gray-500 py-5 text-white mx-3 font-bold font-serif text-center mt-20 mb-8">Burger</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/QvK9kt3/Best-Cheeseburger-Recipe-I-Heart-Naptime.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Smoky Beef Cheeseburger</p>
                                <p className="font-medium text-xl text-orange-500">$12.99</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">A half-pound beef patty grilled over an open flame, topped with smoked cheddar cheese, crispy bacon, and BBQ sauce. Served with lettuce, tomato, and pickles on a toasted brioche bun.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/bgwKT8t/Grilled-Buffalo-Chicken-Sandwiches.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Buffalo Chicken Burger</p>
                                <p className="font-medium text-xl text-orange-500">$10.75</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">Chicken stir-fried with Szechuan peppercorns, dried chilies, and vegetables. This dish offers a mouth-tingling heat combined with savory flavors, delivering a signature spicy punch.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl bg-gradient-to-r from-gray-700 to-gray-500 py-5 text-white mx-3 font-bold font-serif text-center mt-20 mb-8">Coffee</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/6Xm8F0T/Clive-Coffee-Espresso-Recipe.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Espresso Shot</p>
                                <p className="font-medium text-xl text-orange-500">$4.50</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">A bold espresso shot infused with a subtle smokey flavor, crafted using freshly roasted beans and a touch of BBQHOUSE magic. Perfect for a strong caffeine kick with a unique twist.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/Z19gMJL/Mocha-Cappuccino.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Mocha Cappuccino</p>
                                <p className="font-medium text-xl text-orange-500">$6.25</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">A delightful blend of rich espresso, steamed milk, and dark chocolate, topped with foam and a sprinkle of smoked cocoa powder. A perfect combination of sweetness and smoke in every sip.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/Rzw0ZtV/Iced-Vanilla-Latte-Recipe-Starbucks-Copycat-One-Sweet-Appetite.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Grilled Vanilla Iced Coffee</p>
                                <p className="font-medium text-xl text-orange-500">$5.50</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">Freshly brewed coffee over ice with a splash of vanilla syrup, enhanced with a hint of smoky vanilla flavor. Smooth and refreshing with a subtle BBQ twist.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl bg-gradient-to-r from-gray-700 to-gray-500 py-5 text-white mx-3 font-bold font-serif text-center mt-20 mb-8">Cake</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/PFDy6H8/Smoked-Pecan-Pie-The-Mountain-Kitchen.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Smoked Pecan Pie</p>
                                <p className="font-medium text-xl text-orange-500">$9.90</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">A house-smoked sausage bursting with flavor, served with your choice of sides. Known for its rich spices and smoked casing.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/jbSrTN4/Maple-Bourbon-Banana-Pudding-Cake-Simply-Scratch.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Maple Bourbon Bread Pudding</p>
                                <p className="font-medium text-xl text-orange-500">$8.50</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">Classic bread pudding with chunks of artisan bread soaked in a sweet bourbon-maple custard, baked to perfection and served with a drizzle of bourbon glaze.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/pysb2pn/Chocolate-Lava-Cakes.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Chocolate Lava Cake</p>
                                <p className="font-medium text-xl text-orange-500">$9.00</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">A rich, decadent chocolate cake with a molten center, topped with smoked sea salt to enhance the flavors, served warm with a scoop of vanilla ice cream.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl bg-gradient-to-r from-gray-700 to-gray-500 py-5 text-white mx-3 font-bold font-serif text-center mt-20 mb-8">Pizza</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/ydJZWry/BBQ-Chicken-Bacon-Pizza.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">BBQ Chicken & Bacon Pizza</p>
                                <p className="font-medium text-xl text-orange-500">$13.90</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">Smoky grilled chicken, crispy bacon, and a blend of cheddar and mozzarella on a thin crust, topped with BBQ sauce for that perfect blend of sweet and savory.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/dpXY4GP/Grilled-Veggie-Pizza.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Grilled Veggie Pizza</p>
                                <p className="font-medium text-xl text-orange-500">$12.50</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">A healthy option featuring flame-grilled zucchini, bell peppers, and eggplant, drizzled with olive oil and balsamic glaze, topped with mozzarella and smoked provolone.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl bg-gradient-to-r from-gray-700 to-gray-500 py-5 text-white mx-3 font-bold font-serif text-center mt-20 mb-8">Drink</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/1rs8p4j/Delicious-Berry-Smoothie-Recipe.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Berry Blast Shake</p>
                                <p className="font-medium text-xl text-orange-500">$6.50</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">A vibrant mix of strawberries, blueberries, and raspberries, combined with a splash of almond milk for a fruity delight.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 ml-5 mr-5">
                        <img className="w-20 h-20 rounded-xl" src="https://i.ibb.co.com/M64tBVR/dbfa9429-1dec-42ff-879c-aadbdc9e2238.jpg" alt="" />
                        <div className="">
                            <div className="flex gap-5 justify-between">
                                <p className="font-medium text-xl">Smoked Lemonade</p>
                                <p className="font-medium text-xl text-orange-500">$4.50</p>
                            </div>
                            <p className="border-b-2 my-3"></p>
                            <div>
                                <p className="font-serif italic">A refreshing classic lemonade with a BBQ twist. Freshly squeezed lemons mixed with smoked syrup, giving it a subtle, smoky flavor to complement your BBQ meal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;