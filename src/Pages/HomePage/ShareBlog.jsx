
const ShareBlog = () => {
    return (
        <div className="mt-28">
            <h2 className="lg:text-5xl text-3xl text-center text-yellow-600 italic font-serif mb-6">Latest News</h2>
            <h3 className="lg:text-4xl text-2xl font-extralight text-center uppercase">From the blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                <div className="card bg-base-100 border-2 shadow-2xl">
                    <figure>
                        <img className="h-80"
                            src="/Images/10 ways to fuel employee engagement.jpeg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-[16px] text-yellow-600">Restaurant Operations Management Tips</h2>
                        <p className="text-gray-500 italic font-serif text-xs">Write blog posts that offer advice on streamlining restaurant operations. Topics can include staff management, inventory control, and optimizing kitchen workflows.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-yellow-600 font-bold uppercase text-white hover:bg-white hover:text-yellow-600 hover:border-yellow-600">read more</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img className="h-80"
                            src="/Images/KITCHEN AUTOMATION_ 5 MUST-HAVE MODERN FEATURES.jpeg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-[16px] text-yellow-600">Marketing Strategies for Restaurants</h2>
                        <p className="text-gray-500 italic font-serif text-xs">Develop blogs focused on restaurant marketing, including social media strategies, using influencers, and optimizing online reviews.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-yellow-600 font-bold uppercase text-white hover:bg-white hover:text-yellow-600 hover:border-yellow-600">read more</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img className="h-80"
                            src="/Images/Tips for Successful Restaurant Management.jpeg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-[16px] text-yellow-600">Financial Management for Restaurants</h2>
                        <p className="text-gray-500 italic font-serif text-xs">Offer practical financial advice tailored to restaurant owners looking to cut costs and boost profits.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-yellow-600 font-bold uppercase text-white hover:bg-white hover:text-yellow-600 hover:border-yellow-600">read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareBlog;