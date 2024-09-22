import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddFoods = () => {
    const handleAddFoods = e =>{
        e.preventDefault();
        const form = e.target;
        const food_name = form.food_name.value;
        const category = form.category.value;
        const price = form.price.value;
        const madeby = form.madeby.value;
        const food_image = form.food_image.value;
        const food_origin = form.food_origin.value;
        const short_description = form.short_description.value;

        const AddedFood = {food_name, food_image, food_origin, category, price, madeby, short_description}
        console.log(AddedFood);

        fetch('https://public-restaurant-server.vercel.app/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddedFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added Food has been success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>BBQHOUSE || ADD FOODS</title>
            </Helmet>
            <div className="">
                <div className="">
                    <h2 className="lg:text-6xl text-3xl text-center font-bold text-yellow-600 uppercase ml-5 mt-10 mb-20">Add Foods</h2>
                </div>
            </div>

            <div className="p-10 bg-[url('https://i.ibb.co.com/j69Vwf9/Sweet-sour-spicy-Korean-fried-chicken-Yangnyeom-tongdak.jpg')] bg-cover ">
                <form className="hero-overlay opacity-90 p-10 rounded-lg" onSubmit={handleAddFoods}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-around">
                        {/* Foods Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif text-white italic">Foods Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="food_name"
                                    placeholder="Foods name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif text-white italic">Category</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Category"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif text-white italic">Price</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Add by */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif text-white italic">Made By</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="madeby"
                                    placeholder="Added"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Photo URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif text-white italic">Food Images</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="food_image"
                                    placeholder="Food image"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Food Origin */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif text-white italic">Food Origin</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="food_origin"
                                    placeholder="Food origin"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Details */}
                    <h2 className="font-bold mt-4 text-white italic">Short Description</h2>
                    <textarea name="short_description" className="textarea textarea-bordered w-full" placeholder="short description"></textarea>

                    {/* Add Books */}
                    <input type="submit" name="Add Food" value="Add Food" className="w-full my-4 btn bg-yellow-600 text-white hover:text-yellow-600 hover:bg-white hover:border-yellow-600" />
                </form>
            </div>
        </div>
    );
};

export default AddFoods;