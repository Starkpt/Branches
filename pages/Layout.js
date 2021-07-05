import React from 'react'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

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
