import 'styles/globals.css'
import 'styles/fontfaces.css'
import 'styles/nav.css'
import 'styles/home.css'
import 'styles/projects.css'
import 'styles/project.css'
import 'styles/footer.css'

import getConfig from 'next/config'
import { request } from '../lib/datocms'
import Layout from './Layout'

const { publicRuntimeConfig } = getConfig()

function MyApp({ Component, pageProps, projects }) {
  return (
    <>
      <Layout>
        <Component projects={projects} {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async () => {
//   const res = await fetch(`https://graphql.datocms.com/preview`)
//   const iniProps = await res.json()

//   console.log(iniProps)

//   return { iniProps }
const HOMEPAGE_QUERY = `query HomePage {
  allProjects {
    id
    title
    slug
    businessType
    tags
    projectStatus
    featured
    description
    skyview {
      basename
      filename
      url
    }
    creativeProcess {
      basename
      filename
      url
    }
    logo {
      basename
      filename
      url
    }
    logoBackground {
      hex
    }
    colorPalette
    fonts
    techsFront
    techsBack
    devices
  }
}`;

  const projects = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  return { projects };
}

export default MyApp
