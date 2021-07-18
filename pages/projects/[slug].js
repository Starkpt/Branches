
const {API_URL} = process.env

export async function getServerSideProps(context){
  const { slug } = context.query

  const res = await fetch(`${API_URL}/projects?slug=${slug}`)
  const data = await res.json()

  return {
    props:{
      project: data[0]
    }
  }
}
// export const getStaticPaths = async () => {
//   const res = await fetch(`${API_URL}/projects`)
//   const data = await res.json()

//   const slugs = data.map(project => {
//     return {
//       params: { slug: project.slug }
//     }
//   })

//   return {
//     slugs,
//     fallback: false
//   }
// }

// export const getStaticProps = async (context) => {
//   console.log(context)
//   const slug = context.params.slug
//   const res = await fetch(`${API_URL}/projects/${slug}`)
//   const data = await res.json()

//   return {
//     props: { project: data }
//   }
// }


const Project = ( {project} ) => {
  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  )
}

export default Project