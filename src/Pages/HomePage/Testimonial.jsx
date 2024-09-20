import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="mb-20 mt-28">
            <h2 className="text-4xl font-serif italic text-center text-lime-400">Clients</h2>
            <h1 className="text-4xl font-bold text-center mt-2">Testimoniels</h1>

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='mt-10'>
                        <p className='text-center font-light text-2xl'>"It was a fantastic evening in your superb restaurant which was enjoyed by <br /> everyone who was fortunate to be there" </p>
                        <p className='text-center mt-5 uppercase tracking-wide font-medium'>Julie Defoir</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mt-10'>
                        <p className='text-center font-light text-2xl'>"The menu, ambience and special attention given by your staff to the guests, was <br /> as always of the highest standard. We continue to receive compliments by many <br /> of those who were present"</p>
                        <p className='text-center mt-5 uppercase tracking-wide'>Richard nauz</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mt-10'>
                        <p className='text-center font-light text-2xl'>"I had such a wonderful evening yesterday, on my Birthday. The food was, as per <br /> usual, absolutely delicious and my Mother and I thoroughly enjoyed ourselves"</p>
                        <p className='text-center mt-5 uppercase tracking-wide'>James de franco</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mt-10'>
                        <p className='text-center font-light text-2xl'>"It was a fantastic evening in your superb restaurant which was enjoyed by <br /> everyone who was fortunate to be there"</p>
                        <p className='text-center mt-5 uppercase tracking-wide'>Jolie defoir</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;