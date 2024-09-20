import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import banner1 from "../../../public/Images/Banner1.jpg"
import banner2 from "../../../public/Images/Banner2.jpg"
import banner3 from "../../../public/Images/Banner3.jpg"
import banner4 from "../../../public/Images/Banner4.jpeg"
import banner5 from "../../../public/Images/Banner5.jpeg"

const Slider = () => {
    return (
        <div className=''>
            <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide><img className='w-[1300px] h-[600px]' src={banner1} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[1300px] h-[600px]' src={banner2} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[1300px] h-[600px]' src={banner3} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[1300px] h-[600px]' src={banner4} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[1300px] h-[600px]' src={banner5} alt="" /></SwiperSlide>
            
          </Swiper>
        </div>
    );
};

export default Slider;