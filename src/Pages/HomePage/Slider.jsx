import banner1 from "/Images/Banner1.jpg"
import banner2 from "/Images/Banner2.jpg"
import banner3 from "/Images/Banner3.jpg"
import banner4 from "/Images/Banner4.jpeg"

const Slider = () => {
  return (
    <div className=''>
      <div className="carousel ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            className="w-full h-[400px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            className="w-full h-[400px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner3}
            className="w-full h-[400px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={banner4}
            className="w-full h-[400px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;