
import React,{FC} from 'react'
import { ServerData } from '../../types/common'

const ServicesCard: FC<{item: ServerData}> = ({ item }) =>{
  return (
    <a href="https://mir-lun.ru/wp-content/uploads/2020/08/Den-stroitelja-2020-goda-kakogo-chisla-v-Rossii80.jpg" className="box">
        <div className="image">
            <img src="https://mir-lun.ru/wp-content/uploads/2020/08/Den-stroitelja-2020-goda-kakogo-chisla-v-Rossii80.jpg" alt="" />
        </div>
        <div className="content">
            <div className="info">
                <h3>{item.title}</h3>
                <p>{item.describe}</p>
            </div>
            <i className="fas fa-plus"></i>
        </div>
    </a>
  )
}

export default ServicesCard
