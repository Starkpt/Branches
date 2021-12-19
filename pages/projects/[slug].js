const {API_URL} = process.env

import Image from "next/image"
// not used, but a great lib
import Slugify from 'slugify'


import { request } from "../../lib/datocms";


export async function getServerSideProps(context){
  const { slug } = context.query

  const SINGLE_QUERY = `query {
                          allProjects(filter:{slug:{eq:"${slug}"}}){
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

  // const res = await fetch(`${API_URL}/projects?slug=${slug}`)
  // const data = await res.json()
  
  // return {
  //   props:{
  //     project: data[0]
  //   }
  // }

  const project = await request({
    query: SINGLE_QUERY,
    variables: { limit: 10 }
  });
  // console.log(project.allProjects[0].logoBackground)
  return {
    props: { project }
  };
}


const imgLoader = ({ src }) => {
  // return `${API_URL}${src}`
  return `${src}`
}

const Project = ( {project} ) => {

  
  const logoBg = project.allProjects[0].logoBackground.hex
  const colorPalette = project.allProjects[0].colorPalette.split(', ')
  const fonts = project.allProjects[0].fonts.split(', ')
  const techsFront = project.allProjects[0].techsFront.split(', ')
  const techsBack = project.allProjects[0].techsBack.split(', ')

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
            <h1>{project.allProjects[0].title}</h1>
            <div id="header-divider">
              <div className="tags-section">
                <ul className="project-tags">
                  {project.allProjects[0].tags.map(tag => {
                    return (
                      <li key={tag.id}>
                        <div className="left-semi-circle"></div>
                        <div className="tag-name">{tag}</div>
                        <div className="right-semi-circle"></div>
                      </li>
                    )
                  })}
                </ul>
                {
                  project.allProjects[0].state == true
                  ? <div className="status-border"><div className="project-status status-online"></div></div>
                  : <div className="status-border"><div className="project-status status-offline"></div></div>
                }
              </div>
            </div>
            <p>{project.allProjects[0].type}</p>
          </div>
          <div id="project-filling">
            <div id="project-description">
                <p>{project.allProjects[0].description}</p>
            </div>
            <div id="skyview">
                <ul id="skyview-slider">
                  {project.allProjects[0].skyview.map((sv, i) => {
                    if(i==0){
                      return(
                        <li key={sv.id} className="skyview-slide current" data-zindex={-1} data-img={i}>
                          <Image loader={imgLoader} src={sv.url} width={510} height={310}  objectFit="cover"/>
                        </li>
                      )
                    }if(i>0){
                      return(
                        <li key={sv.id} className="skyview-slide" data-zindex={-1} data-img={i}>
                          <Image loader={imgLoader} src={sv.url} width={510} height={310}  objectFit="cover"/>
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
                  {project.allProjects[0].skyview.map((bullet, i) => {
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
              <h3>Creative Process</h3>
              <ul id="process-grid">
                {project.allProjects[0].creativeProcess.map(p => {
                  return(
                    <li className="process-thumbnail" onClick={(e) => {processModal(e)}}>
                      <Image loader={imgLoader} src={p.url} width={153} height={153}  objectFit="cover"/>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div id="project-schematics">
              <div id="project-logo-container" style={{ backgroundColor : logoBg}}>
                <ul id="logo-list">
                  {project.allProjects[0].logo.map(l => {
                    return(
                      <li>
                        <Image loader={imgLoader} src={l.url} width={180} height={90}  objectFit="contain"/>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div id="schematics-info">
                <div id="color-scheme">
                  <h3>Color Scheme</h3>
                  <ul>
                    {colorPalette.map(color => {
                      return(
                        <li>
                          <div className="color-square" style={{ backgroundColor : color}}></div>
                          <div>
                            <p>{color}</p>
                            {/* <small>{color}</small> */}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div id="fonts-list">
                  <h3>Fonts</h3>
                  <ul>
                    {fonts.map(font => {
                      return(
                        <li>
                          <p style={{ fontFamily : `${font}`}}>{font}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div id="technologies">
                  <h3>Technologies</h3>
                  <div id="techs-grouping">
                    <div id="backend-techs">
                      <h4>Backend</h4>
                      <ul>
                        {techsBack.map(be => {
                          return(
                            <li>
                              <p>{be}</p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div id="frontend-techs">
                      <h4>Frontend</h4>
                      <ul>
                        {techsFront.map(fe => {
                          return(
                            <li>
                              <p>{fe}</p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="breakpoints">
                  <h3>Breakpoints</h3>
                  <ul>
                    {project.allProjects[0].devices.map(device => {
                      switch(device){
                        case "desktop":
                            return (
                              <li>
                                <div style={{
                                    width : 1920 / 12 + "px",
                                    height : 1080 / 12 + "px"
                                  }}>
                                  <p>1920 x 1080</p>
                                </div>
                              </li>
                            )

                        case "laptop":
                          return (
                            <li>
                              <div style={{
                                  width : 1366 / 12 + "px",
                                  height : 768 / 12 + "px"
                                }}>
                                <p>1366 x 768</p>
                              </div>
                            </li>
                          )

                          case "tablet":
                            return (
                              <li>
                                <div style={{
                                    width : 768 / 12 + "px",
                                    height : 1024 / 12 + "px"
                                  }}>
                                  <p>768 x 1024</p>
                                </div>
                              </li>
                            )
                          
                          case "mobile":
                            return (
                              <li>
                                <div style={{
                                    width : 360 / 12 + "px",
                                    height : 720 / 12 + "px"
                                  }}>
                                  <p>768 x 1024</p>
                                </div>
                              </li>
                            )
                      }
                      
                    })}
                  </ul>
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