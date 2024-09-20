import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import FirstWel from "./FirstWel";
import TopFoods from "../../Components/TopFoods/TopFoods";
import ChineeseFood from "./ChineeseFood";
import ShareBlog from "./ShareBlog";
import Testimonial from "./Testimonial";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BBQHOUSE || HOME</title>
            </Helmet>
            <Slider></Slider>
            <FirstWel></FirstWel>
            <TopFoods></TopFoods>
            <ChineeseFood></ChineeseFood>
            <ShareBlog></ShareBlog>
            <Testimonial></Testimonial>
            <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default Home;