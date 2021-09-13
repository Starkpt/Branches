import Head from 'next/head'
import Home from './Home'

import { request } from "../lib/datocms";

export default function Index({projects}) {
  return (
    <>
      <Head>
        <title>Branches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home projects={projects} />
      </main>
    </>
  )
}


export async function getServerSideProps(){

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
  
  return {
    props: { projects }
  };
  
}