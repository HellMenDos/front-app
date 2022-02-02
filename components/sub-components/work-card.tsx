
import React,{FC} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ServerData,File } from '../../types/common'

import 'swiper/css';
import "swiper/css/navigation"

const WorkCard: FC<{item: ServerData}> = ({ item }) =>{
  return (
    <div className="swiper-slide slide">
        <div className="image image-work">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              loop={true}
              effect="fade"
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
                {
                item.files.map((file: File) => {
                    return (
                      <SwiperSlide key={file.id}>
                        <img src={file.photo} alt="" />
                      </SwiperSlide>
                    )

                }) 
                }  
            </Swiper>
        </div>
        
        <div className="content">
            <h3>{item.title}</h3>
            <p>{item.describe}</p>
            <a href={item?.button_url ? item?.button_url : '#contact'} className="btn">Подробнее</a>
        </div>
    </div>
  )
}

export default WorkCard
