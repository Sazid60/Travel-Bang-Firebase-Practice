import { Link } from "react-router-dom";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';



const Home = () => {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-6">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-7xl mb-3">COX'S BAZAR</h1>
                    <p className="max-w-[435px]">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className="btn bg-[#F9A51A] text-black btn-md mt-4 border-0"><Link to={"/booking"}>Book Now</Link></button>
                </div>
                <div className="">
                    <Swiper 
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={10}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation,Autoplay]}
                        className="mySwiper">
                        <SwiperSlide><img className="h-72 shadow-2xl" src="/Sajek.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className="h-72 shadow-2xl" src="/Sreemongol.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className="h-72 shadow-2xl" src="/sundorbon.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className="h-72 shadow-2xl" src="/Sajek.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className="h-72 shadow-2xl" src="/Sreemongol.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className="h-72 shadow-2xl" src="/sundorbon.png" alt="" /></SwiperSlide>
   
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Home;