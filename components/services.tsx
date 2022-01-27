
import React,{FC} from 'react'
import ServicesCard from './sub-components/services-card'
import { ServerData } from '../types/common'

const Services: FC<{data: ServerData[]}> = ({data}) =>{
  return (
      <>
        <section className="projects" id="projects">

        <h1 className="heading">Наши услуги </h1>

        <div className="box-container">
          {
            data.map((item: ServerData) => <ServicesCard  key={item.id} item={item}/>) 
          }
        </div>

        </section>
      </>
  )
}

export default Services
