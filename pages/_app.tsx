import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useState,useEffect } from 'react'

import { Popup } from '../components/popup/popup'
import ContactForm from '../components/contact-form'

import { Page } from '../types/common'
import { fetchData } from '../utils/fetching'
import { useRouter } from 'next/router'


interface PagesLinkProps {
  pages:Page[],
  prefix?:string
  position?: 'top' | 'bottom'
}
const isButton = (position:string | undefined) => position == 'bottom' ? 'btn' : ''


const PagesLink: React.FC<PagesLinkProps> = ({pages,prefix = '',position = 'top'}) => {
    return (
    <> {
    pages.map((item:Page)=> {
      return (
        <Link key={item.id} href={`${prefix}/page/${item.id}`}>
          <a className={isButton(position)}>{item.page_title}</a>
        </Link>
      )
    })}</>
  )
}


function Layout({ Component, pageProps }: AppProps) {
  const [ active , setActive ] = useState(false)
  const [ modal , setModal ] = useState(false)
  const [ pages , setPages ] = useState<Page[] | []>([])
  const router = useRouter()

  const isTech = (path:string) => path.split("/")[1] == 'tech'
  const showNavBar = () => setActive(!active)

  const HrefConstructor = (path:string) => isTech(router.pathname) ? `#${path}` : `/${path}`

  const moveBetweenSection = (position = 'top') => {
    return (
      <>
      {!isTech(router.pathname) ? (
        <Link href={'/tech'}>
          <a className={isButton(position)}>Разработка Програмного обеспечения</a>
        </Link>        
      ) : (
        <Link href={'/'}>
          <a className={isButton(position)}>Строительстов</a>
        </Link>
      )}
      </>
    )
  }

  useEffect(()=> {
    if(!isTech(router.pathname)) {
      fetchData<Page[]>('main','page/all/').then((response)=>setPages(response))
    }else {
      setPages([])
    }
  },[router.pathname])

  return <div>
    <header className="header">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/css/lightgallery.min.css" />
      <Link href="/">
        <a className="logo">
          СК <span>СТРОЙПРОЕКТ</span>
        </a>
      </Link>

      <nav className={`navbar ${active && 'active'}`}>
        <Link href={HrefConstructor('products')}>
          <a>Продукты</a>
        </Link>
        <Link href={HrefConstructor('services')}>
          <a>Услуги</a>
        </Link>
        <Link href={HrefConstructor('works')}>
          <a>Работы</a>
        </Link>
        {moveBetweenSection()}
        <PagesLink pages={pages} />   
      </nav>

      <div className="icons">
        <div id="menu-btn" className="fas fa-bars" onClick={showNavBar}></div>
        <a className="btn" onClick={()=> setModal(!modal)}>Связаться</a>
      </div>

    </header>
    <main>
      <Component {...pageProps} />
      <Popup isOpen={modal} closeModal={setModal}>
        <ContactForm path={(isTech(router.pathname) ? 'tech' : 'main') as string} />
      </Popup>
    </main>
        
    <section className="footer">

    <div className="links">
        <Link href={HrefConstructor('products')}>
          <a className='btn'>Продукты</a>
        </Link>
        <Link href={HrefConstructor('services')}>
          <a className='btn'>Услуги</a>
        </Link>
        <Link href={HrefConstructor('works')}>
          <a className='btn'>Работы</a>
        </Link>
        {moveBetweenSection('bottom')}
        <PagesLink pages={pages} position={'bottom'} />

    </div>

    <div className="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>

    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js"></script>
  </div>
}

export default Layout
