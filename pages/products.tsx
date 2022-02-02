import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

import { fetchData } from '../utils/fetching';
import { ServerData } from '../types/common'

const ProductsPage: NextPage<{products:ServerData[]}> = ({ products }) => {
  return (
      <>
        <Head>
          <title>Каталок продуктов</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Projects data={products} />
        <About />
        <Contact path={'main'} />
      </>
  )
}

export const  getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchData<ServerData[]>('main','products/all/')
  
  return {
      props: {
          products,
      }
  }
}


export default ProductsPage
