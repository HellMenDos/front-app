
import React,{FC} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import SliderCard from './sub-components/slider-card';

const Slider: FC<{data:any}> = ({data}) => {
  return (
      <>
        <section className="home" id="home">

        <div className="swiper home-slider">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
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


        <div className="js-swiper-pagination-progress-button-next">→</div>
        <div className="js-swiper-pagination-progress-button-prev">←</div>

        </div>

        </section>
      </>
  )
}

export default Slider
