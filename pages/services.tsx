import type { GetServerSideProps, NextPage } from 'next'
import About from '../components/about';
import Services from '../components/services';
import Contact from '../components/contact';
import Head from 'next/head'
import { Page, ServerData } from '../types/common';
import { fetchData } from '../utils/fetching';

const ServicesPage: NextPage<{service:ServerData[]}> = ({ service }) => {
  return (
      <>
        <Head>
          <title>Наши услуги</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Services data={service}/>
        <About />
        <Contact />
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
