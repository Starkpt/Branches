import React from 'react'
import Image from 'next/image'

export default function Projects() {
  return (
    <main>
      <div id="projects-container">
        <div id="projects-list">
          <div id="project-header">
            <h1>Projects</h1>
            <button id="filter-btn">
              <Image src="/icons/filters.svg" width={20} height={20} />
              <p>Filters</p>
            </button>
          </div>
          <div id="filters-container" class="toggle-on">
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
        </div>
      </div>
    </main>
  )
}
