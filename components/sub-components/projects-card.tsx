
import React,{ FC, useEffect } from 'react'
import { ServerData } from '../../types/common'
import Link from 'next/link'


const ProjectsCard: FC<{item: ServerData}> = ({ item }) =>{
  return (
    <Link href={`/products/${item.id}`}>
      <a className="box">
          <img src="images/service-1.png" alt="" />
          <h3>{item.title}</h3>
          <p>{item.sub_title}</p>
      </a>
    </Link>
  )
}

export default ProjectsCard
