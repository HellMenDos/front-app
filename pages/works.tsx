import type { GetServerSideProps, NextPage } from 'next'
import About from '../components/about';
import Work from '../components/work';
import Contact from '../components/contact';
import Head from 'next/head'
import { ServerData } from '../types/common';
import { fetchData } from '../utils/fetching';

const WorksPage: NextPage<{work:ServerData[]}> = ({ work }) => {
  return (
      <>
        <Head>
          <title>Наши работы</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Work data={work} />
        <About />
        <Contact />
      </>
  )
}

export const  getServerSideProps: GetServerSideProps = async () => {
  const work = await fetchData<ServerData[]>('main','work/all/')
  
  return {
      props: {
        work,
      }
  }
}


export default WorksPage
