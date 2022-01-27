import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Page } from '../../types/common'
import { fetchData } from '../../utils/fetching'


const Page: NextPage<{ page: Page }> = ({page}) => {
  const router = useRouter()
  const { id } = router.query

  useEffect(()=> {
    // @ts-ignore
    document.querySelector('.box-container').innerHTML = product.describe
  },[])

  return (
      <>
        <Head>
          <title>Страница № {id}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section>
          <h1  className="heading">{page.title}</h1>
          <div className="box-container box-container-page">
          </div>
        </section>
      </>
  )
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  const page = await fetchData<Page>('main',`page/one/${id}`)

  return {
    props: {
      page
    }
  }
}

export default Page
