
import React,{FC} from 'react'
import ProjectsCard from './sub-components/projects-card'
import { ServerData } from '../types/common'

const Projects: FC<{data: ServerData[]}> = ({data}) =>{
  return (
      <>
        <section className="services" id="services">

        <h1 className="heading">Каталог продуктов</h1>

        <div className="box-container">
            {
              data.map((item: ServerData) => <ProjectsCard key={item.id} item={item} />) 
            }        
        </div>

        </section>
      </>
  )
}

export default Projects
