import 'styles/globals.css'
import 'styles/nav.css'
import 'styles/home.css'
import 'styles/footer.css'

import getConfig from 'next/config'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
