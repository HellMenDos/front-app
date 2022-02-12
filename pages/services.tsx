import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import About from '../components/about';
import Services from '../components/services';
import Contact from '../components/contact';

import { ServerData } from '../types/common';
import { fetchData } from '../utils/fetching';

const ServicesPage: NextPage<{service:ServerData[]}> = ({ service }) => {
  return (
      <>
        <Head>
          <title>Наши услуги</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Услуги которые мы предоставляем" />
        </Head>
        <Services data={service}/>
        <About />
        <Contact path={'main'}/>
      </>
  )
}

export const  getServerSideProps: GetServerSideProps = async () => {
  const service = await fetchData<ServerData[]>('main','service/all/')

  return {
      props: {
        service,
      }
  }
}

export default ServicesPage
