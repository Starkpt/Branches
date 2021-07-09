import React from 'react'
import Image from 'next/image'


export default function Projects() {
  
  const toggleFilters = () => {
    let filters = document.getElementById('filters-wrapper')
    filters.classList.toggle('filters-show')
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
            <li className="project-item">
              <a href="">
                <div className="project-thumbnail">
                  <Image src="/skylights/365viagens.jpg" layout="fill" objectFit="contain"/>
                </div>
                <div className="project-list-info">
                  <div className="project-list-details">
                    <h3>365 Viagens</h3>
                    <h5>Travel Agency</h5>
                    <ul className="project-tags">
                      <li>
                        <a href="">
                          <div className="left-semi-circle"></div>
                          <div className="tag-name">Web Design</div>
                          <div className="right-semi-circle"></div>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <div className="left-semi-circle"></div>
                          <div className="tag-name">Web Design</div>
                          <div className="right-semi-circle"></div>
                        </a>
                      </li>
                    </ul>
                    <div className="project-description">
                      
                    </div>
                  </div>
                  <div className="project-list-status">
                    <Image src="/icons/tag-bullet.svg" width={10} height={10} />
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
