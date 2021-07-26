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

  const processModal = (e) => {
    var modalEle = document.getElementById('process-modal')
    modalEle.innerHTML = `<img src=${e.target.src} />`
    modalEle.classList.add('modal-show')
  }

  const closeModal = (e) => {
    var modalEle = document.getElementById('process-modal')
    modalEle.innerHTML = ``
    modalEle.classList.remove('modal-show')
  }

  return (
    <main>
      <div id="process-modal" onClick={(e) => {closeModal(e)}}></div>
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
                <h3>Process</h3>
                <ul id="process-grid">
                  {project.process.map(p => {
                    return(
                      <li className="process-thumbnail" onClick={(e) => {processModal(e)}}>
                        <Image loader={sliderLoader} src={p.url} width={153} height={153}  objectFit="cover"/>
                      </li>
                    )
                  })}
                </ul>
            </div>
            <div id="project-schematics">
              <div id="project-logo-container">
                <ul id="logo-list">
                  {project.logo.map(l => {
                    console.log(l)
                    return(
                      <li>
                        <Image loader={sliderLoader} src={l.url} width={180} height={90}  objectFit="contain"/>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div id="schematics-info">
                <div id="color-scheme">
                  <h3>Color Scheme</h3>
                  <ul>
                    <li>
                      <div className="color-square"></div>
                      <div>
                        <p>Color Name</p>
                        <small>#041DBB</small>
                      </div>
                    </li>
                    <li>
                      <div className="color-square"></div>
                      <div>
                        <p>Secondary Color Name</p>
                        <small>#041DBB</small>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="fonts-list">
                  <h3>Fonts</h3>
                  <ul>
                    <li>
                      <div className="color-square"></div>
                      <div>
                        <p>Color Name</p>
                      </div>
                    </li>
                    <li>
                      <div className="color-square"></div>
                      <div>
                        <p>Secondary Color Name</p>
                        <small>#041DBB</small>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="technologies">
                  <h3>Technologies</h3>
                  <div id="backend-techs">
                    <ul>
                      <li>
                        <div className="color-square"></div>
                        <div>
                          <p>Color Name</p>
                        </div>
                      </li>
                      <li>
                        <div className="color-square"></div>
                        <div>
                          <p>Secondary Color Name</p>
                          <small>#041DBB</small>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div id="frontend-techs">
                    <ul>
                      <li>
                        <div className="color-square"></div>
                        <div>
                          <p>Color Name</p>
                        </div>
                      </li>
                      <li>
                        <div className="color-square"></div>
                        <div>
                          <p>Secondary Color Name</p>
                          <small>#041DBB</small>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="breakpoints">
                  <h3>Breakpoints</h3>
                  <div id="backend-techs">
                    <ul>
                      <li>
                        <div className="color-square"></div>
                        <div>
                          <p>Color Name</p>
                        </div>
                      </li>
                      <li>
                        <div className="color-square"></div>
                        <div>
                          <p>Secondary Color Name</p>
                          <small>#041DBB</small>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div id="frontend-techs">
                    <ul>
                      <li>
                        <div className="color-square"></div>
                        <div>
                          <p>Color Name</p>
                        </div>
                      </li>
                      <li>
                        <div className="color-square"></div>
                        <div>
                          <p>Secondary Color Name</p>
                          <small>#041DBB</small>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Project