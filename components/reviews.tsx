
import React,{FC} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReviewsCard from './sub-components/reviews-card';

const Reviews: FC = () => {

  return (
      <>
        <section className="reviews">

        <h1 className="heading"> clients reviews </h1>

        <div className="swiper reviews-slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
            </Swiper>
        </div>

        </section>
      </>
  )
}

export default Reviews
