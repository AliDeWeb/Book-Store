import React from "react";

//? React Router
import { Link } from "react-router-dom";

//? SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//? Imaged
import productImg from "../../assets/imgs/products-img/the-lord-of-the-rings.jpg";

export default function TrendBooksSlider({ trends }) {
  return (
    <div className="py-6">
      <div className="container">
        <Swiper
          spaceBetween={5}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1.5,
            },
            768: {
              width: 768,
              slidesPerView: 2.2,
            },
            1024: {
              width: 1024,
              slidesPerView: 2.8,
            },
            1280: {
              width: 1280,
              slidesPerView: 3.4,
            },
            1536: {
              width: 1536,
              slidesPerView: 4.2,
            },
          }}
        >
          {trends.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="flex flex-col bg-[#2a2a2a] px-4 py-3 rounded-lg w-[280px] md:w-[332px] h-[402px] md:h-[456px] m-auto text-white">
                <div className="size-[250px] md:size-[300px] rounded-lg overflow-hidden">
                  <Link className="size-full">
                    <img
                      src={productImg}
                      alt="img"
                      loading="lazy"
                      className="size-full"
                    />
                  </Link>
                </div>
                <h3 className="mt-3 uppercase md:text-xl line-clamp-1">
                  <Link>{el.title}</Link>
                </h3>
                <div className="flex items-center gap-3 mt-4 child:text-gray-400">
                  <span className="text-sm">${el.price}</span>
                  <span className="text-sm hover:text-white transition-all capitalize line-clamp-1">
                    <Link>{el.author}</Link>
                  </span>
                </div>
                <div className="mt-4">
                  <button className="text-white rounded-lg py-2 px-8 bg-[#1b1b1b] hover:bg-[#0f0f0f] transition-all">
                    Add
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
