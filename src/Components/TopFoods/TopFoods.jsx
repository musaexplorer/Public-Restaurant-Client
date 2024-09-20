import { useEffect, useState } from "react";
import TopFoodsPerCard from "./TopFoodsPerCard";

const TopFoods = () => {
    const [topfoods, setTopFoods] = useState();
    useEffect(()=> {
        fetch('http://localhost:5000/topfoods')
        .then(res => res.json())
        .then(data => setTopFoods(data))
    }, [])

    return (
        <div className="mt-28 ml-5 mb-10">
            <h2 className="text-5xl font-bold">Our Best Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
                {
                    topfoods?.map(topfoods => <TopFoodsPerCard key={topfoods._id} topfoods={topfoods}></TopFoodsPerCard>)
                }
            </div>
        </div>
    );
};

export default TopFoods;