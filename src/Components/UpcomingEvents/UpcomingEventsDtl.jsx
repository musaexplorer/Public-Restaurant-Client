import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const UpcomingEventsDtl = () => {
    const { user } = useAuth();
    const data = useLoaderData();
    console.log(data);
    const { image, event_name, date, tickets } = data;

    const BookNow = () => {
        const value = {
            name: user?.name,
            email: user?.email,
            event_name,
            image,
            date,
            tickets
        };

        fetch('https://public-restaurant-server.vercel.app/booknow', {
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
                    'The selected Events have been added!',
                    'success'
                );
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                Swal.fire(
                    'Error!',
                    'There was a problem adding the Events.',
                    'error'
                );
            });
    };

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co.com/T27FjZZ/delicious-meal-table.jpg')] h-40 bg-cover my-5 pt-7 text-white font-bold lg:text-4xl text-xl font-serif italic">
                <div className="pb-10 pt-7 w-full bg-slate-700 bg-opacity-45">
                    <p>{data?.event_name}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center">
                <div className="ml-10">
                    <p className="text-4xl mb-5 font-extralight uppercase mt-14">when</p>
                    <p className="flex items-center gap-2"><FaRegCalendarAlt className="text-yellow-600 text-xl"></FaRegCalendarAlt> {data?.date}</p>
                </div>
                <div className="lg:ml-5 ml-10">
                    <p className="text-4xl mb-5 font-extralight uppercase mt-14">Where</p>
                    <p className="flex items-center gap-2"><FaLocationDot className="text-yellow-600 text-xl"></FaLocationDot> {data?.location}</p>
                </div>
                <img className="ml-7 mt-14 w-80" src={data?.image} alt="" />
                <p className="mt-14"><span className="text-2xl font-semibold font-serif ml-10">Events Ticket :</span> <span className="text-xl font-serif italic text-yellow-600 ml-6">{data?.tickets}</span></p>
                <button onClick={BookNow} className="btn bg-yellow-600 font-bold uppercase text-white hover:text-yellow-600 hover:bg-white hover:border-yellow-600 lg:ml-14 ml-0 mt-14">Book Now</button>
            </div>
            <p className="font-serif italic text-gray-600 mx-10 mt-10">{data?.details}</p>
            <p className="font-serif italic text-gray-600 mx-10 mt-10 mb-10">{data?.long_description}</p>

            <Link to='/'><button className="btn bg-yellow-600 text-white hover:text-yellow-600 hover:bg-white hover:border-yellow-600 font-bold uppercase ml-40 lg:ml-[600px] mb-10">Back</button></Link>
        </div>
    );
};

export default UpcomingEventsDtl;