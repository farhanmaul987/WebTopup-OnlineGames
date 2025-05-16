"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BannerCarousel = ({ banners }) => {
  return (
    <section className="items-center bg-sdBlack py-7">
      {/* <div className="mx-auto w-full max-w-[1200px]"> */}
      <Swiper modules={[Autoplay]} loop autoplay={{ delay: 4000 }}>
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href="" className="hero-carousel">
              <div
                className="carousel-slide"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                <div className="carousel-content">
                  <h2>{banner.title}</h2>
                  <p>{banner.description}</p>
                  <button className="btn-primary">Top Up Sekarang</button>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </section>
  );
};

export default BannerCarousel;
