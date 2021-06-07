import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
            
      <header>
        <Nav />
      </header>

      {children}

      <footer>
        <Footer />
      </footer>

    </>
  )
}
