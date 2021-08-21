const {API_URL} = process.env
import Image from 'next/image'
// not used, but a great lib

const imgLoader = ({ src }) => {
  return `${API_URL}${src}`
}

export default function Home({ projects }){
  return(
    <>
      <div id="intro-slide" className="slide">
        <h1>Web Development, Web Design, and more..</h1>
        <div id="filter-gradient"></div>
        <a id="know-more" href="#">
          <Image src="/icons/arrow-down.png" width={27.5} height={15} />
          <p>Know More</p>
        </a>
      </div>
      <div id="trifecta-slide" className="slide">
        <div id="trifecta-container" className="slide-container">
          <h1>Do you need a professional website?</h1>
          <ul id="trifecta">
            <li>
              <Image src="/icons/responsive.png" width={50} height={45.5} />
              <h3>Responsive Design</h3>
              <p>Tailored layouts implementing guidelines of the most recent trends, for a better user experience.</p>
            </li>
            <li>
              <Image src="/icons/fullstack.png" width={50} height={44} />
              <h3>Full-stack Development</h3>
              <p>Front-end and back-end taken into high consideration to present a full fledged and high-quality product.</p>
            </li>
            <li>
              <Image src="/icons/support.png" width={50} height={44} />
              <h3>Technical Support</h3>
              <p>Our team is ready to troubleshoot and provide support for any difficulty you might come across.</p>
            </li>
          </ul>
        </div>
      </div>
      <div id="flavor-slide" className="slide half">
        <div id="flavor-container" className="slide-container">
          <h4>A website is a way to expose your business to a wider audience and lay foundations for future growth of a business.</h4>
        </div>
      </div>
      <div id="showcase-slide" className="slide">
        <div id="showcase-container" className="slide-container">
          <h1>Projects</h1>
          <div id="showcase-full">
            <a href="" className="showcase-arrows arrow-left">
              <Image src="/icons/arrow-left.png" width={24} height={44}/>
            </a>
            <a href="" className="showcase-arrows arrow-right">
              <Image src="/icons/arrow-right.png" width={24} height={44}/>
            </a>
            <div>
              <ul id="showcase-cards">
                <li className="showcase-card">
                  <a href="project-name">
                  <div className="showcase-title">
                    <h2>Project Name</h2>
                    <p>Tipo de Negócio</p>
                  </div>
                  <div className="project-skylight">
                    <Image src="/skylights/conceito2a.jpg" width={300-(300/4)} height={180-(180/4)} />
                  </div>
                  <div className="status-url">
                    <div className="card-status"></div>
                    <a href="#" className="card-url">www.site.com</a>
                  </div>
                  <div className="card-info">
                    <p>Client requested an easy way to present real estate for rent online.</p>
                  </div>
                  <div className="card-tags">
                    <div className="card-tag">
                      <div className="center-rect">
                        <p>Development</p>
                      </div>
                    </div>
                  </div>
                  </a>
                </li>
                <li className="showcase-card">
                  <a href="project-name">
                    <div className="showcase-title">
                      <h2>Project Name</h2>
                      <p>Tipo de Negócio</p>
                    </div>
                    <div className="project-skylight">
                      <Image className="skylight" src="/skylights/atomo.jpg" width={300-(300/4)} height={180-(180/4)} />
                    </div>
                    <div className="status-url">
                      <div className="card-status"></div>
                      <a href="#" className="card-url">www.123site.com</a>
                    </div>
                    <div className="card-info">
                      <p>Online portfolio for an architecture atelier.</p>
                    </div>
                    <div className="card-tags">
                      <div className="card-tag">
                        <div className="center-rect">
                          <p>Development</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="showcase-card">
                  <a href="project-name">
                    <div className="showcase-title">
                      <h2>Project Name</h2>
                      <p>Tipo de Negócio</p>
                    </div>
                    <div className="project-skylight">
                      <Image src="/skylights/365viagens.jpg" width={300-(300/4)} height={180-(180/4)} />
                    </div>
                    <div className="status-url">
                      <div className="card-status"></div>
                      <a href="#" className="card-url">www.site.com</a>
                    </div>
                    <div className="card-info">
                      <p>Travel agency website with focus on the simplicity of scheduling vacations.</p>
                    </div>
                    <div className="card-tags">
                      <div className="card-tag">
                        <div className="center-rect">
                          <p>Development</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="about-slide" className="slide">
        <div id="about-container" className="slide-container">
          <h1>About</h1>
          <p>Branches specializes in website development for small and medium companies, that want to expand and be relevant on the web.</p>
          <br />
          <p>From design to development, we provide the best options and advices to our customers, based on their needs and ideas, using the latest guidelines and trends of design combined with the best development technologies and tools of today.</p>
        </div>
      </div>
      <div id="contact-slide" className="slide">
        <div id="contact-container" className="slide-container">
          <h1>Contact Us</h1>
          <form id="contact-form">
            <div id="contact-name">
              <input type="text" id="contact-fname" name="fname" placeholder="First Name" />
              <input type="text" id="contact-lname" name="lname" placeholder="Last Name" />
            </div>
            <input type="text" id="contact-email" name="email" placeholder="Email" />
            <input type="text" id="contact-subject" name="subject" placeholder="Subject" />
            <textarea id="contact-message" name="message" placeholder="Message"></textarea>
            <input type="submit" id="contact-submit" name="submit" placeholder="Submit" />
          </form>
        </div>
      </div>
    </>
  )
}