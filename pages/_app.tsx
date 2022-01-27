/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { Page } from '../types/common'
import { fetchData } from '../utils/fetching'


function Layout({ Component, pageProps }: AppProps) {
  const [ active , setActive ] = useState(false)
  const [ pages , setPages ] = useState<Page[] | []>([])

  const showNavBar = () => setActive(!active)

  useEffect(()=> {
    fetchData<Page[]>('main','page/all/').then((response)=>setPages(response))
  },[])

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
        <Link href="/products">
          <a>Продукты</a>
        </Link>
        <Link href="/services">
          <a>Услуги</a>
        </Link>
        <Link href="/works">
          <a>Работы</a>
        </Link>
        {
          pages.map((item:Page)=> {
            return (
              <Link key={item.id} href={`/page/${item.id}`}>
                <a>{item.page_title}</a>
              </Link>
            )
          })
        }

      </nav>

      <div className="icons">
        <div id="menu-btn" className="fas fa-bars" onClick={showNavBar}></div>
        <a className="btn">Связаться</a>
      </div>

    </header>
    <main>
      <Component {...pageProps} />
    </main>
        
    <section className="footer">

    <div className="links">
        <Link href="/products">
          <a className='btn'>Продукты</a>
        </Link>
        <Link href="/services">
          <a className='btn'>Услуги</a>
        </Link>
        <Link href="/works">
          <a className='btn'>Работы</a>
        </Link>
        {
          pages.map((item:Page)=> {
            return (
              <Link key={item.id} href={`/page/${item.id}`}>
                <a>{item.page_title}</a>
              </Link>
            )
          })
        }
    </div>

    <div className="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>

    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js"></script>
  </div>
}

export default Layout
