import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { request } from "../../lib/datocms";

// const HOMEPAGE_QUERY = `query HomePage {
//                                 allProjects {
//                                   id
//                                   title
//                                   slug
//                                   businessType
//                                   tags
//                                   projectStatus
//                                   featured
//                                   description
//                                   skyview {
//                                     basename
//                                     filename
//                                     url
//                                   }
//                                   creativeProcess {
//                                     basename
//                                     filename
//                                     url
//                                   }
//                                   logo {
//                                     basename
//                                     filename
//                                     url
//                                   }
//                                   logoBackground {
//                                     hex
//                                   }
//                                   colorPalette
//                                   fonts
//                                   techsFront
//                                   techsBack
//                                   devices
//                                 }
//                         }`;

const {API_URL} = process.env

import slugify from 'slugify'

// export const getStaticProps = async () => {
//   const res = await fetch(`${API_URL}/projects`)
//   console.log(API_URL)
//   const data = res.json()
//   return res
// }

export async function getStaticProps(){
   
  // const projects = await fetch(`${API_URL}/projects`).then(res => res.json())
  // return{
  //   props:{
  //     projects: projects
  //   }
  // }
  // const projects = await request({
  //   query: HOMEPAGE_QUERY,
  //   variables: { limit: 10 }
  // });
  // // console.log(projects.allProjects)
  // return {
  //   props: { projects }
  // };
}



export default function Projects({projects}) {
  
  const [statusArr, setStatus] = useState([])
  const [tagsArr, setTags] = useState([])
  
  //Image Loader from NextJS
  const imgLoader = ({ src }) => {
    // return `${API_URL}${src}`
    return `${src}`
  }
  //Toggle visibility of filter section
  const toggleFilters = () => {
    let filters = document.getElementById('filters-wrapper')
    // filters.classList.toggle('filters-hide')
    filters.classList.toggle('filters-show')
  }
  
  const toggleStatus = (e) => {
    let inputEle = e.target
    if(inputEle.classList == "tag-input"){
      if(!(statusArr.includes(true)) && inputEle.name == "true"){
        setStatus([...statusArr, true])
      }else if(!(statusArr.includes(false)) && inputEle.name == "false"){
        setStatus([...statusArr, false])
      }else if(statusArr.includes(true) || statusArr.includes(false)){
        let statusIndex = statusArr.findIndex(state => state === inputEle.name)
        statusArr.splice(statusIndex, 1)
        setStatus([...statusArr])
      }
    }
  }
  const toggleTags = (e) => {
    let inputEle = e.target
    if(inputEle.classList == "tag-input"){
      if(!(tagsArr.includes(inputEle.name))){
        setTags([...tagsArr, inputEle.name])
      }else{
        let tagIndex = tagsArr.findIndex(tag => tag == inputEle.name)
        tagsArr.splice(tagIndex, 1)
        setTags([...tagsArr])
      }
    }
  }
  const filterTags = []
  projects.allProjects.map(project => {
    project.tags.map(tag => {
      if(!filterTags.includes(tag)){
        filterTags.push(tag)
      }
    })
  })

  useEffect(() => {
    const projectItems = document.querySelectorAll('.project-item')
    for(let i=0;i<projectItems.length;i++){
      projectItems[i].classList.remove('opacitor')
      setTimeout(function(){
        if(projectItems[i].classList.contains('opacitor')){
          projectItems[i].classList.add('opacitor')
        }else{
          projectItems[i].classList.add('opacitor')
        }
      },250)
    }
  }, [statusArr])

  useEffect(() => {
    const projectItems = document.querySelectorAll('.project-item')
    for(let i=0;i<projectItems.length;i++){
      projectItems[i].classList.remove('opacitor')
      setTimeout(function(){
        if(projectItems[i].classList.contains('opacitor')){
          projectItems[i].classList.add('opacitor')
        }else{
          projectItems[i].classList.add('opacitor')
        }
      },250)
    }
  }, [tagsArr])

  return ( 
    <main>
      <div id="projects-container">
        <div id="projects-list">
          <div id="project-list-header">
            <h1>Projects</h1>
            <button id="filter-btn" onClick={toggleFilters}>
              <Image src="/icons/filters.svg" width={20} height={20} />
              <p>Filters</p>
            </button>
          </div>
          <div id="filters-container" className="toggle-on">
            <div id="filters-wrapper">
              <div id="filter-status" className="filter-list">
                <h6>Status:</h6>
                <ul>
                  <li>
                    <label htmlFor="tag-deployed" onClick={(e) => {toggleStatus(e)}}>
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-deployed" className="tag-input" name="true"/>
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Deployed</div>
                      <div className="right-semi-circle"></div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="tag-development" onClick={(e) => {toggleStatus(e)}}>
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-development" className="tag-input" name="false" />
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Development</div>
                      <div className="right-semi-circle"></div>
                    </label>
                  </li>
                </ul>
              </div>
              <div id="filter-tags" className="filter-list">
                <h6>Tags:</h6>
                <ul>
                  {filterTags.map(fTag => (
                    <li>
                      <label className="filter-label" htmlFor={`input-${fTag}`} onClick={(e) => {toggleTags(e)}}>
                        <div className="left-semi-circle">
                          <input type="checkbox" id={`input-${fTag}`} className="tag-input" name={fTag} />
                          <div className="bullet-circle"></div>
                        </div>
                        <div className="tag-name">{fTag}</div>
                        <div className="right-semi-circle"></div>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ul>
            {projects.allProjects.filter(project => {

              if(!(statusArr.length) && !(tagsArr.length)){
                return project
              }
              for(let i = 0; i<project.tags.length; i++){
                if(tagsArr.includes(project.tags[i])){
                  return project
                }
              }
              // se tiver status no array E o array contiver o state
              if(statusArr.length && statusArr.includes(project.projectStatus)){
                for(let i = 0; i<statusArr.length; i++){
                  return project
                }
              }

            }).map(project => (
              <li key={project.id} className="project-item" data-status={project.projectStatus} data-tags={project.tags.map(tag => slugify(tag,{lower:true}))}>
                <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
                <a href="">
                  <div className="project-thumbnail">
                    <Image loader={imgLoader} src={project.skyview[0].url} layout="fill" objectFit="contain"/>
                  </div>
                  <div className="project-list-info">
                    <div className="project-list-details">
                      <div className="project-title">
                        <div className="title-grouping">
                          <h3>{project.title}</h3>
                          <h5>{project.type}</h5>
                        </div>
                        {
                          project.projectStatus == true
                          ? <div className="projects-status status-online"></div>
                          : <div className="projects-status status-offline"></div>
                        }
                      </div>
                      <ul className="project-tags">
                        {project.tags.map(tag=>(
                          <li>
                            <div className="left-semi-circle"></div>
                            <div className="tag-name">{tag}</div>
                            <div className="right-semi-circle"></div>
                          </li>
                        ))}
                      </ul>
                      <div className="project-list-description">
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
