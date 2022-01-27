
import React,{FC} from 'react'
import { ServerData } from '../../types/common'

const WorkCard: FC<{item: ServerData}> = ({ item }) =>{
  return (
    <div className="swiper-slide slide">
        <div className="image">
            <img src="https://mir-lun.ru/wp-content/uploads/2020/08/Den-stroitelja-2020-goda-kakogo-chisla-v-Rossii80.jpg" alt="" />
        </div>
        <div className="content">
            <h3>{item.title}</h3>
            <p>{item.describe}</p>
            <a href="#" className="btn">read more</a>
        </div>
    </div>
  )
}

export default WorkCard
