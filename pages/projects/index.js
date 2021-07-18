import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const {API_URL} = process.env


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
  
  const toggleFilters = () => {
    let filters = document.getElementById('filters-wrapper')
    // filters.classList.toggle('filters-hide')
    filters.classList.toggle('filters-show')
  }

  const skylightLoader = ({ src }) => {
    return `${API_URL}${src}`
  }

  return (
    <main>
      <div id="projects-container">
        <div id="projects-list">
          <div id="project-header">
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
                    <label htmlFor="tag-online">
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-online" className="tag-input" name="online" />
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
                  <li>
                    <label htmlFor="tag-logo-design">
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-logo-design" className="tag-input" name="logo-design" />
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Logo Design</div>
                      <div className="right-semi-circle"></div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="tag-web-design">
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-web-design" className="tag-input" name="web-design" />
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Web Design</div>
                      <div className="right-semi-circle"></div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="tag-web-development">
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-web-development" className="tag-input" name="web-development" />
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Web Development</div>
                      <div className="right-semi-circle"></div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="tag-branding">
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-branding" className="tag-input" name="branding" />
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Web Development</div>
                      <div className="right-semi-circle"></div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="tag-other">
                      <div className="left-semi-circle">
                        <input type="checkbox" id="tag-other" className="tag-input" name="other" />
                        <div className="bullet-circle"></div>
                      </div>
                      <div className="tag-name">Other</div>
                      <div className="right-semi-circle"></div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul>
            {projects.map(project => (
              <li className="project-item">
                <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
                <a href="">
                  <div className="project-thumbnail">
                    <Image loader={skylightLoader} src={project.skyview[0].url} layout="fill" objectFit="contain"/>
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
                          ? <div className="project-status status-online"></div>
                          : <div className="project-status status-offline"></div>
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
                      <div className="project-description">
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
