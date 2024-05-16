import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/navigation";

import { useEffect, useState } from "react";

const Carousel = ({ imgs, styles }: { imgs: string[]; styles?: string }) => {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    setSmall(window.innerWidth < 768);
  }, []);

  return (
    <div className={`container mx-auto ${styles ? styles : ""}`}>
      <Swiper
        spaceBetween={0}
        slidesPerView={small ? 2 : 5}
        modules={[Autoplay, Pagination, Parallax, Navigation]}
        autoplay={{
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
          // reverseDirection: true,
        }}
        // pagination={{ clickable: true }}
        navigation={small ? false : true}
      >
        {imgs.map((img, index) => (
          <SwiperSlide className="grid place-items-center" key={index}>
            <img
              src={img}
              alt={`patience ${index}`}
              className="max-w-32 h-10 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carousel;
