import { BiCategory } from "react-icons/bi";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaHashtag } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllFoodPerCards = ({ item,}) => {
    const { _id, food_image, food_name, category, Tags, price } = item || {};
    console.log(item);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img className="h-80 w-full"
                        src={food_image}
                        alt="Foods" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-serif">{food_name}</h2>
                    <div className="flex">
                        <p className="font-medium italic flex items-center gap-1"><BiCategory className="text-yellow-600 text-lg"></BiCategory> <span className="italic font-serif">{category}</span></p>
                        <p className="font-medium italic flex items-center gap-1"><MdOutlinePriceChange className="text-yellow-600 text-lg"></MdOutlinePriceChange> <span className="italic font-serif">{price}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-600 flex items-center gap-2">
                            <FaHashtag className="text-yellow-600"></FaHashtag> Tags:
                        </span>
                        <div className="flex items-center gap-1">
                            {Tags?.map((value) => (
                                <span
                                    key={value}
                                    className="px-2 py-1.5 bg-gray-300 text-black text-xs rounded-md"
                                >
                                    {value}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* <p className="flex items-center gap-1"><FaHashtag></FaHashtag> Tags : {Tags}</p> */}
                    <div className="card-actions justify-end">
                        <Link to={`/item/${_id}`}><button className="btn bg-yellow-600 text-white font-bold uppercase hover:text-yellow-600 hover:bg-white">Details</button></Link>
                        <Link to={`/updatefoods/${_id}`}><button className="btn bg-yellow-600 text-white font-bold uppercase hover:text-yellow-600 hover:bg-white hover:border-yellow-600">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFoodPerCards;