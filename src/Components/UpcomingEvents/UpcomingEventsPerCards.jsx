import { Link } from "react-router-dom";

const UpcomingEventsPerCards = ({events}) => {
    const {_id, image, event_name, details} = events || {};
    console.log(events);

    return (
        <div data-aos="zoom-in" className=" p-4">
            <div className="relative">
                <img alt="gallery" className="absolute inset-0 w-full h-80 object-cover bg-cover" src={image} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-700 opacity-0 hover:opacity-75">
                    <h1 className="title-font text-xl font-medium text-white">{event_name}</h1>
                    <p className="leading-relaxed text-white italic">{details}</p>
                    <Link to={`/events/${_id}`}><button className="btn bg-yellow-600 text-white hover:text-yellow-600 hover:bg-white hover:border-yellow-600 uppercase">read more</button></Link>
                </div>
            </div>
        </div>
        // <div>
        //     <div className="card bg-base-100 w-96 shadow-xl">
        //         <figure>
        //             <img
        //                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        //                 alt="Events" />
        //         </figure>
        //         <div className="card-body">
        //             <h2 className="card-title">Shoes!</h2>
        //             <p>If a dog chews shoes whose shoes does he choose?</p>
        //             <div className="card-actions justify-end">
        //                 <button className="btn btn-primary">Buy Now</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default UpcomingEventsPerCards;