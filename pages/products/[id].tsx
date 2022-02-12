import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { ServerData } from '../../types/common'
import { fetchData } from '../../utils/fetching'
import { File } from '../../types/common';


const Product: NextPage<{ product: ServerData }> = ({product}) => {
  const router = useRouter()
  const { id } = router.query

  useEffect(()=> {
    // @ts-ignore
    document.querySelector('.box-container').innerHTML = product.describe
  },[])

  return (
      <>
        <Head>
          <title>{product.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={product.sub_title} />
        </Head>
        <section>
          <h1  className="heading">{product.title}</h1>
          <div className="box-container box-container-page">
          </div>
          <div className='file-section'>
            <h4  className="heading">Прикрепленные файлы</h4>
            <div>
              {(product.files as File[]).map((item:File) => <a className='btn btn-download' href={item.photo}>{item.title}</a>)}
            </div>
          </div>
        </section>
      </>
  )
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  const product = await fetchData<ServerData>('main',`products/one/${id}`)

  return {
    props: {
      product
    }
  }
}

export default Product
