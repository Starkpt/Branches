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