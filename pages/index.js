import Head from 'next/head'
import Home from './Home'
// import BgPattern from 'components/Background'
import { request } from "../lib/datocms";

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

//cant remember what this does
//const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(){

  // const { API_URL } = process.env
   
  // const projects = await fetch(`${API_URL}/projects`).then(res => res.json())
  // // console.log(projects)
  // return{
  //   props:{
  //     projects: projects
  //   }
  // }
  const projects = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  // console.log(projects)
  return {
    props: { projects }
  };
}