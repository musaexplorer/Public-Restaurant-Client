import { Link } from "react-router-dom";

const TopFoodsPerCard = ({topfoods}) => {
    const {_id, food_image, food_name, category, price} = topfoods || {};
    console.log(topfoods);

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="h-80 w-full"
                        src={food_image}
                        alt="Foods" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-serif">{food_name}</h2>
                    <div className="flex">
                        <p className="font-medium italic">Category : <span className="italic font-serif">{category}</span></p>
                        <p className="font-medium italic">Price: <span className="italic font-serif">{price}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/topfood/${_id}`}>
                            <button className="btn bg-yellow-600 text-white font-bold uppercase hover:text-yellow-600 hover:bg-white">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFoodsPerCard;