import Image from 'next/image'
import Link from 'next/link'

export default function Nav(){
  return(
    <>
      <div id="navbar">
        <div id="logo-container">
          <a href="/">
            <Image src="/icons/branches.png" width={48} height={48} />
          </a>
        </div>
        <ul id="nav-menu">
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  )
}