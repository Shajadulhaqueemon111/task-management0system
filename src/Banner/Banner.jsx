import React, { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Style.css';

const Banner = () => {
  
 
    return (
      <>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                <SwiperSlide>
                    <img src="https://i.ibb.co/FDcJrsX/isometric-time-management-concept-illustrated-52683-55534.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/yq1K6k8/colorful-weekly-timeline-table-for-project-report-free-vector.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/fCd4Fyh/consuming-public-content-workflow.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Dz62j6y/hand-drawn-flat-design-business-planning-concept-23-2149190174.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/CzHy7WS/timing-project-scheduling-74855-4584.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
            
        </>
    );
};

export default Banner;
