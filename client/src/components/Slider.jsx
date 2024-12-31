import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "../assesets/css/swiperStyles.css";
import { useSelector } from "react-redux";
import SliderRoll from "./SliderRoll";
const Slider = () => {
  const products = useSelector((state) => state.products);
  const [Fruits, setFruits] = useState(null);
  useEffect(() => {
    setFruits(products?.filter((data) => data.product_category === "fruits"));
    console.log("displaying fruits");
    console.log(Fruits);
  }, [products]);

  return (
    <div className="w-full pt-24">
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {Fruits &&
          Fruits.map((data, i) => (
            <SwiperSlide key={i}>
              <SliderRoll key={i} data={data} index={i}></SliderRoll>
            </SwiperSlide>
          ))}
        {/* {Fruits ? (
          <>
            (
            <SwiperSlide key={0}>
              <SliderRoll key={0} data={Fruits[0]} index={0}></SliderRoll>
            </SwiperSlide>
            <SwiperSlide key={0}>
              <SliderRoll key={0} data={Fruits[0]} index={0}></SliderRoll>
            </SwiperSlide>
            <SwiperSlide key={0}>
              <SliderRoll key={0} data={Fruits[0]} index={0}></SliderRoll>
            </SwiperSlide>
            <SwiperSlide key={0}>
              <SliderRoll key={0} data={Fruits[0]} index={0}></SliderRoll>
            </SwiperSlide>
            <SwiperSlide key={0}>
              <SliderRoll key={0} data={Fruits[0]} index={0}></SliderRoll>
            </SwiperSlide>
            )
          </>
        ) : (
          <></>
        )} */}
        {/* <SwiperSlide key={0}><SliderRoll key={0} data={Fruits[0]} index={0}></SliderRoll></Swip<SliderRoll key={0} data={Fruits[0]} index={0}></SliderRoll> */}
      </Swiper>
    </div>
  );
};

export default Slider;
