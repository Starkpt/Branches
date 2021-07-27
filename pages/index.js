import Head from 'next/head'
import Home from './Home'
import BgPattern from 'components/Background'

export default function Index({projects}) {
  // console.log(projects)
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

  const { API_URL } = process.env
   
  const projects = await fetch(`${API_URL}/projects`).then(res => res.json())
  // console.log(projects)
  return{
    props:{
      projects: projects
    }
  }
}
