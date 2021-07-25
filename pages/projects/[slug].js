const {API_URL} = process.env

import Image from "next/image"
// not used, but a great lib
import Slugify from 'slugify'

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
const sliderLoader = ({ src }) => {
  return `${API_URL}${src}`
}

const Project = ( {project} ) => {
  
  const skyviewBullets = (e) => {
    var slides = document.querySelectorAll('.skyview-slide')
    var bullets = document.querySelectorAll('.skyview-bullet')
    var bullet = e.target
    bullets.forEach(b => {
      b.classList.remove('active')
    })
    
    slides.forEach(slide => {
      slide.classList.remove('current')
    })

    document.querySelector(`[data-img="${bullet.dataset['bullet']}"]`).classList.add('current')
    
    bullet.classList.add('active')
  }

  const skyviewLeft = (e) => {
    e.preventDefault()
    var slides = document.querySelectorAll('.skyview-slide')
    var bullets = document.querySelectorAll('.skyview-bullet')
    var active = document.querySelector('.active')
    
    if(active.dataset['bullet'] == 0){
      return false
    }else{
      bullets.forEach(b => {
        b.classList.remove('active')
      })
      
      slides.forEach(slide => {
        slide.classList.remove('current')
      })
      document.querySelector(`.skyview-slide[data-img="${Number(active.dataset['bullet']) - 1}"]`).classList.add('current')
      document.querySelector(`.skyview-bullet[data-bullet="${Number(active.dataset['bullet']) - 1}"]`).classList.add('active')

      
    }
  }
  
  const skyviewRight = (e) => {
    e.preventDefault()
    var slides = document.querySelectorAll('.skyview-slide')
    var bullets = document.querySelectorAll('.skyview-bullet')
    var active = document.querySelector('.active')
    

    if(active.dataset['bullet'] == slides.length - 1 || active.dataset['bullet'] == null || active.dataset['bullet'] == undefined){
      return false
    }else{
      bullets.forEach(b => {
        b.classList.remove('active')
      })
      
      slides.forEach(slide => {
        slide.classList.remove('current')
      })
      document.querySelector(`.skyview-slide[data-img="${Number(active.dataset['bullet']) + 1}"]`).classList.add('current')
      document.querySelector(`.skyview-bullet[data-bullet="${Number(active.dataset['bullet']) + 1}"]`).classList.add('active')
    }
  }

  return (
    <main>
      <div id="project-container">
        <div id="project-wrapper">
          <div id="project-header">
            <h1>{project.title}</h1>
            <div id="header-divider">
              <div className="tags-section">
                <ul className="project-tags">
                  {project.tags.map(tag => {
                    return (
                      <li key={tag.id}>
                        <div className="left-semi-circle"></div>
                        <div className="tag-name">{tag.name}</div>
                        <div className="right-semi-circle"></div>
                      </li>
                    )
                  })}
                </ul>
                {
                  project.state == true
                  ? <div className="status-border"><div className="project-status status-online"></div></div>
                  : <div className="status-border"><div className="project-status status-offline"></div></div>
                }
              </div>
            </div>
            <p>{project.type}</p>
          </div>
          <div id="project-filling">
            <div id="project-description">
                <p>{project.description}</p>
            </div>
            <div id="skyview">
                <ul id="skyview-slider">
                  {project.skyview.map((sv, i) => {
                    if(i==0){
                      return(
                        <li key={sv.id} className="skyview-slide current" data-zindex={-1} data-img={i}>
                          <Image loader={sliderLoader} src={sv.url} width={510} height={310}  objectFit="cover"/>
                        </li>
                      )
                    }if(i>0){
                      return(
                        <li key={sv.id} className="skyview-slide" data-zindex={-1} data-img={i}>
                          <Image loader={sliderLoader} src={sv.url} width={510} height={310}  objectFit="cover"/>
                        </li>
                      )
                    }
                  })}
                  <a href="" onClick={(e) => {skyviewLeft(e)}} className="showcase-arrows skyview-arrow-left">
                    <Image src="/icons/arrow-left.png" width={12} height={22}/>
                  </a>  
                  <a href="" onClick={(e) => {skyviewRight(e)}} className="showcase-arrows skyview-arrow-right">
                    <Image src="/icons/arrow-right.png" width={12} height={22}/>
                  </a>
                </ul>
                <ul id="skyview-bullets">
                  {project.skyview.map((bullet, i) => {
                    if(i==0){
                      return(
                        <li key={bullet.id}  onClick={(e) => {skyviewBullets(e)}} className="skyview-bullet active" data-bullet={i}></li>
                      )
                    }else{
                      return(
                        <li key={bullet.id}  onClick={(e) => {skyviewBullets(e)}} className="skyview-bullet" data-bullet={i}></li>
                      )
                    }
                  })}
                </ul>
                <a id="site-link" href="http:\\www.365viagens.pt">Ver Página</a>
            </div>
            <div id="project-process">
                <h4>Process</h4>
                <ul>

                </ul>
            </div>
            <div id="project-schematics">
                <div id="logo-container">
                  {/* <Image loader={logoLoader} src={proc.url} layout="fill" objectFit="contain"/> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Project