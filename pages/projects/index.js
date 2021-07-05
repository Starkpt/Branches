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
          <div id="filters-container">
            <div id="filter-status" className="filter-list">
              <h6>Status:</h6>
              <ul>
                <li>
                  <label for="tag-online">
                    <div className="left-semi-circle">
                      <input type="checkbox" id="tag-online" class="tag-input" name="online" />
                      <div className="bullet-circle">
                        <Image src="/icons/tag-bullet.svg" width={0} height={0} />
                      </div>
                    </div>
                    <div className="tag-name">Online</div>
                    <div className="right-semi-circle"></div>
                  </label>
                </li>
                <li>
                  <label for="tag-development">
                    <div className="left-semi-circle">
                      <input type="checkbox" id="tag-development" class="tag-input" name="development" />
                      <div className="bullet-circle">
                        <Image src="/icons/tag-bullet.svg" width={0} height={0} />
                      </div>
                    </div>
                    <div className="tag-name">Development</div>
                    <div className="right-semi-circle"></div>
                  </label>
                </li>
                <li>
                  <label for="tag-maintenance">
                    <div className="left-semi-circle">
                      <input type="checkbox" id="tag-maintenance" class="tag-input" name="maintenance" />
                      <div className="bullet-circle">
                        <Image src="/icons/tag-bullet.svg" width={0} height={0} />
                      </div>
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
                <li>Logo Design</li>
                <li>Web Design</li>
                <li>Development</li>
                <li>Other</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
