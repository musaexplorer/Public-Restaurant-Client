import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const AllFoodDtl = () => {
    const {user} = useAuth();
    const data = useLoaderData();
    console.log(data);
    const { food_image, food_name, price, made_by} = data;

    const OrderNow = () => {
        const value = { 
            name: user?.name, 
            email: user?.email, 
            food_name, 
            food_image, 
            price, 
            made_by 
        };
    
        fetch('https://public-restaurant-server.vercel.app/ordered', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log('Success:', data);
            Swal.fire(
                'Added!',
                'The selected Ordered Food have been added!',
                'success'
            );
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            Swal.fire(
                'Error!',
                'There was a problem adding the ordered foods.',
                'error'
            );
        });
    };

    return (
        <div className="mb-10">
            <div className="bg-[url('https://i.ibb.co.com/T27FjZZ/delicious-meal-table.jpg')] h-40 bg-cover my-5 pt-7 text-white font-bold text-center lg:text-4xl text-xl font-serif">
                <div className="pb-10 pt-7 w-full bg-slate-700 bg-opacity-45">
                    <p>Our Foods Details</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-6 ml-20 mr-10">
                <img className="lg:w-[600px] w-60 lg:h-[600px] mt-14" src={data?.food_image} alt="" />
                <div className="mt-14">
                    <h2 className="lg:text-4xl text-2xl text-gray-700 font-semibold mt-4">{data?.food_name}</h2>
                    <p className="lg:text-2xl text-xl text-gray-600 flex items-center mt-4"><span className="text-3xl font-semibold">{data?.price}</span></p>
                    <div className="flex gap-10 mb-5 mt-10">
                        <p className="text-2xl"><span className="font-semibold uppercase">Category :</span> <span className="font-serif italic">{data?.category}</span></p>
                    </div>
                    <div className="gap-8 mb-6">
                        <p className="text-2xl mb-5"><span className="font-semibold uppercase">Made by :</span> <span className="font-serif italic">{data?.made_by}</span></p>
                        <p className="text-2xl"><span className="font-semibold uppercase">Food Origin :</span> <span className="font-serif italic">{data?.food_origin}</span></p>
                    </div>
                    <p className="text-xl"><span className="font-semibold text-2xl">Description :</span> <span className="font-serif italic">{data?.short_description}</span></p>
                    <button onClick={OrderNow} className="btn bg-yellow-500 font-bold uppercase text-white hover:text-yellow-500 hover:border-yellow-500 hover:bg-white lg:ml-32 ml-2 mt-5">Order Now</button>
                </div>
            </div>
            <Link to='/item'><button className="btn bg-yellow-500 font-bold uppercase text-white lg:ml-[600px] ml-40 hover:text-yellow-500 hover:border-yellow-500 hover:bg-white mt-10">Back</button></Link>
        </div>
    );
};

export default AllFoodDtl;