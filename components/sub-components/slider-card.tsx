
import React,{FC} from 'react'

const SliderCard: FC<{item:any}> = ({ item }) => {
  return (
    <section className="swiper-slide slide">
        <div className="content">
            
            <h3>{item?.title}</h3>
            <p>{item?.describe}</p>
            <a href="#about" className="btn">get started</a>
        </div>
    </section>
  )
}

export default SliderCard
