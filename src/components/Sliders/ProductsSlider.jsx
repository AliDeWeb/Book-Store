import React from "react";

//? React Router
import { Link } from "react-router-dom";

//? SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//? Images
import img1 from "../../assets/imgs/products-img/01.jpg";
import img2 from "../../assets/imgs/products-img/02.jpg";
import img3 from "../../assets/imgs/products-img/03.jpg";
import img4 from "../../assets/imgs/products-img/04.jpg";
import img5 from "../../assets/imgs/products-img/05.jpg";

export default function ProductsSlider(props) {
  return (
    <div className="py-6">
      <div className="container">
        <h2 className="text-white font-Inter-Bold text-2xl mb-8 capitalize">
          {props.sectionTitle}
        </h2>
        <Swiper
          spaceBetween={5}
          slidesPerView={1.2}
          breakpoints={{
            410: {
              width: 410,
              slidesPerView: 1.8,
            },
            640: {
              width: 640,
              slidesPerView: 2.3,
            },
            768: {
              width: 768,
              slidesPerView: 2.8,
            },
            1024: {
              width: 1024,
              slidesPerView: 3.8,
            },
            1280: {
              width: 1280,
              slidesPerView: 4.8,
            },
            1536: {
              width: 1536,
              slidesPerView: 5.8,
            },
          }}
        >
          {props.productsArr.map((el) => (
            <SwiperSlide key={Math.random()}>
              <div className="flex flex-col bg-[#2a2a2a] rounded-lg m-auto text-white w-[200px] h-[296px]">
                <div className="size-full rounded-t-lg overflow-hidden">
                  <Link className="size-full">
                    <img
                      src={img5}
                      loading="lazy"
                      alt="img"
                      className="size-full"
                    />
                  </Link>
                </div>
                <div className="px-4 py-3">
                  <h3 className="mt-3 uppercase line-clamp-1">
                    <Link>{el.title}</Link>
                  </h3>
                  <div className="flex items-center gap-3 mt-4 child:text-gray-400">
                    <span className="text-sm">${el.price}</span>
                    <span className="text-sm hover:text-white transition-all line-clamp-1">
                      <Link>{el.author}</Link>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
