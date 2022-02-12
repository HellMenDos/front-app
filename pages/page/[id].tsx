import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Page, File } from '../../types/common';
import { fetchData } from '../../utils/fetching'


const Page: NextPage<{ page: Page }> = ({page}) => {
  const router = useRouter()
  const { id } = router.query

  useEffect(()=> {
    // @ts-ignore
    document.querySelector('.box-container').innerHTML = page.describe
  },[])

  return (
      <>
        <Head>
          <title>{page.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={page.page_title} />
        </Head>
        <section>
          <h1  className="heading">{page.title}</h1>
          <div className="box-container box-container-page">
          </div>
          <div className='file-section'>
            <h4  className="heading">Прикрепленные файлы</h4>
            <div>
              {page.files.map((item:File) => <a className='btn btn-download' href={item.photo}>{item.title}</a>)}
            </div>
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
