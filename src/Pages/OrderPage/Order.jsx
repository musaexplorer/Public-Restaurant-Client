import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const MyList = () => {
    const listedSpots = useLoaderData();
    const [ordered, setMyOrder] = useState(listedSpots);

    const handleDelete = id => {
        fetch(`http://localhost:5000/ordered/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    console.log('deleted successfully');
                    const remaininListed = ordered?.filter(listedSpots => listedSpots._id !== id);
                    setMyOrder(remaininListed);
                }
            })
    }

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co.com/T27FjZZ/delicious-meal-table.jpg')] h-40 bg-cover my-5 pt-7 text-white font-bold text-center text-4xl font-serif">
                <div className="pb-10 pt-7 px-36 w-full bg-slate-700 bg-opacity-45">
                    <p>My Ordered Foods</p>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th className="lg:text-[15px] text-[12px] font-medium font-serif">Del</th>
                                <th className="lg:text-[15px] text-[12px] font-medium font-serif">Image</th>
                                <th className="lg:text-[15px] text-[12px] font-medium font-serif">Food Name</th>
                                <th className="lg:text-[15px] text-[12px] font-medium font-serif">Price</th>
                                <th className="lg:text-[15px] text-[12px] font-medium font-serif">Made By</th>

                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                ordered?.map(listedFoods => <tr key={listedFoods._id}>
                                    <td data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"><button onClick={() => handleDelete(listedFoods?._id)} className="btn bg-red-700 text-white font-bold">X</button></td>
                                    <td data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"><img className="h-16 w-20" src={listedFoods?.food_image} alt="" /></td>
                                    <td data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" className="font-serif italic">{listedFoods?.food_name}</td>
                                    <td data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" className="font-serif italic">{listedFoods?.price}</td>
                                    <th data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" className="font-serif italic">{listedFoods?.made_by}</th>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;