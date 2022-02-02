
import React,{FC} from 'react'
import { ServerData } from '../../types/common'

const ServicesCard: FC<{item: ServerData}> = ({ item }) =>{
  return (
    <a href={item.button_url ? item.button_url : "#contact"} className="box">
        <div className="image">
            <img src={item.files[0].photo} alt="" />
        </div>
        <div className="content">
            <div className="info">
                <h3>{item.title}</h3>
                <p>{item.describe}</p>
            </div>
            <i className="fas fa-info"></i>
        </div>
    </a>
  )
}

export default ServicesCard
