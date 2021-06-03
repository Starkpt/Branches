import 'styles/globals.css'
import 'styles/nav.css'
import 'styles/home.css'
import 'styles/footer.css'

import getConfig from 'next/config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
