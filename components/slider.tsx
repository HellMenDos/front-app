
import React,{ FC,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import "swiper/css/navigation"

import SliderCard from './sub-components/slider-card';
import { BiArrowFromRight } from "react-icons/bi";
import { Carousel } from '../types/common';

const Slider: FC<{data:Carousel[]}> = ({data}) => {

  return (
      <>
        <section className="home" id="home">

        <div className="swiper home-slider">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            loop={true}
            effect="fade"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                {
                    data.map((item: any) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <SliderCard item={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>

        </section>
      </>
  )
}

export default Slider
