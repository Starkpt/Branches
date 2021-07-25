import 'styles/globals.css'
import 'styles/fontfaces.css'
import 'styles/nav.css'
import 'styles/home.css'
import 'styles/projects.css'
import 'styles/project.css'
import 'styles/footer.css'

import getConfig from 'next/config'
import Layout from './Layout'

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
