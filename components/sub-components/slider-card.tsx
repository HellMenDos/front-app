
import React,{FC} from 'react'
import { Carousel } from '../../types/common'

const SliderCard: FC<{item:Carousel}> = ({ item }) => {
  return (
    <section className="swiper-slide slide" style={{backgroundImage: `url(${item.photo ? item.photo : "'https://www.tambov.gov.ru/assets/images/news/kochanova/strojka.jpg'"})`}}>
        <div className="content">
            
            <h3>{item.title}</h3>
            <p>{item.describe}</p>
            <a href={item?.button_url ? item?.button_url : '#contact'} className="btn">{item?.button_text ? item?.button_text : "Подробнее"}</a>
        </div>
    </section>
  )
}

export default SliderCard
