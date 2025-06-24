import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const MySwiper = ({wedase}) => {
  const defaultImg = ["/assets/monday/ze_senuy/selam-leki.jpg"];
  // Check if wedase is available; use default image if not
  const img = wedase?.img?.length >= 1 ? wedase.img : defaultImg;
    console.log(img)
    return (
      <Swiper
        className=' h-full'
        modules={[Navigation, Pagination]}
        spaceBetween={50} 
        slidesPerView={1} 
        loop={true} 
        freeMode={true}
        touchRatio={1}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} 
        pagination={{ clickable: true }}
      >
         {img.length > 0 && img.map((image, index) => (
                   <SwiperSlide className='object-cover'> <img key={index} src={`${image}`} alt="/assets/monday/ze_senuy/selam-leki.jpg" className=" w-full h-full object-contain mb-5 mt-5" width={180} height={200}/></SwiperSlide>
                   ))}
      </Swiper>
    );
  };
  
  export default MySwiper;