import featuredItems from "../../../public/Images/delicious-meal-table.jpg";
import "./ChineeseFood.css";

const ChineeseFood = () => {
    return (
        <div className="mt-28 featured-item bg-fixed bg-cover pt-14 text-white">
            <h2 className="text-5xl font-medium text-center uppercase mb-5">Featured Items</h2>
            <div className="">
                <div className="md:flex justify-center items-center pb-14 pt-16 px-36 bg-slate-700 bg-opacity-45">
                    <div>
                        <img className="w-[800px]" src={featuredItems} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p className="text-4xl italic text-lime-400">Chineese</p>
                        <p className="text-4xl font-bold uppercase mt-3">Specialities</p>
                        <p className="font-serif italic mt-5">This world-famous dish from Beijing is known for its crispy, glossy skin and tender meat. The duck is traditionally roasted in an open flame, served with thin pancakes, hoisin sauce, and sliced scallions. Diners wrap the meat and crispy skin in the pancake, creating a flavorful bite.</p>
                        <button className="btn btn-outline hover:bg-white hover:text-black border-0 border-b-4 mt-5 uppercase text-white">Read MOre</ button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChineeseFood;