import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
const {API_URL} = process.env

import slugify from 'slugify'

// export const getStaticProps = async () => {
//   const res = await fetch(`${API_URL}/projects`)
//   console.log(API_URL)
//   const data = res.json()
//   return res
// }

export async function getStaticProps(){
   
  const projects = await fetch(`${API_URL}/projects`).then(res => res.json())
  // console.log(projects)
  return{
    props:{
      projects: projects
    }
  }
}

export default function Projects({projects}) {
  
  const [statusArr, setStatus] = useState([])
  const [tagsArr, setTags] = useState([])
  
  //Image Loader from NextJS
  const imgLoader = ({ src }) => {
    return `${API_URL}${src}`
  }
  //Toggle visibility of filter section
  const toggleFilters = () => {
    let filters = document.getElementById('filters-wrapper')
    // filters.classList.toggle('filters-hide')
    filters.classList.toggle('filters-show')
    console.log(tagsArr)
  }
  
  const toggleStatus = (e) => {
    let inputEle = e.target
    if(inputEle.classList == "tag-input"){
      // setStatus([...statusArr, `Entry 213`])
      setStatus([...statusArr, `Entry 213`])
      // console.log(e.target.tagName)
      // console.log(inputEle.dataset.name)
      // console.log(statusArr)
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
      }
    }
  }

  const filterTags = []
  projects.map(project => {
    project.tags.map(tag => {
      if(!filterTags.includes(tag.name)){
        filterTags.push(tag.name)
      }
    })
  })

  useEffect(() => {
    
  }, [statusArr])

  useEffect(() => {
    
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
                    {statusArr}
                    <label htmlFor="tag-online"  onClick={(e) => {toggleStatus(e)}}>
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-online" className="tag-input" name="online"/>
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Online</div>
                      <div className="right-semi-circle"></div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="tag-development">
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-development" className="tag-input" name="development" />
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Development</div>
                      <div className="right-semi-circle"></div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="tag-maintenance">
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-maintenance" className="tag-input" name="maintenance" />
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Maintenance</div>
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
            {projects.map(project => (
              <li key={project.id} className="project-item" data-status={project.state} data-tags={project.tags.map(tag => slugify(tag.name,{lower:true}))}>
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
                          project.state == true
                          ? <div className="projects-status status-online"></div>
                          : <div className="projects-status status-offline"></div>
                        }
                      </div>
                      <ul className="project-tags">
                        {project.tags.map(tag=>(
                          <li>
                            <div className="left-semi-circle"></div>
                            <div className="tag-name">{tag.name}</div>
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
