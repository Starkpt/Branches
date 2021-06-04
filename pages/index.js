import Head from 'next/head'
// import styles from 'styles/Homepage.module.css'
import Nav from 'components/Nav'
import Home from 'components/Home'
import Footer from 'components/Footer'
import BgPattern from 'components/Background'

export default function Index({projects}) {
  // console.log(projects)
  return (
    <>
      <Head>
        <title>Branches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        <Nav />
      </header>

      <main>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

//cant remember what does this do 
//const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(){

  const { API_URL } = process.env
   
  const projects = await fetch(`${API_URL}/projects`).then(res => res.json())
  console.log(projects)
  return{
    props:{
      projects: projects
    }
  }
}
