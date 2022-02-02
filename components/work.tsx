
import React,{FC} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import WorkCard from './sub-components/work-card';
import { ServerData } from '../types/common'
import 'swiper/css';


const Works: FC<{data: ServerData[]}> = ({data}) =>{
  return (
      <>
        <section className="works" id="works">

        <h1 className="heading">Наши работы</h1>

        <div className="swiper blogs-slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
            >
                {
                data.map((item: ServerData) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <WorkCard item={item} />
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

export default Works


