import Image from 'next/image'

export default function Nav(){
  return(
    <>
      <div id="navbar">
        <div id="logo-container">
          <a href="#">
            <Image src="/icons/branches.png" width={48} height={48} />
          </a>
        </div>
        <ul id="nav-menu">
          <li>Projects</li>
          <li>About</li>
        </ul>
      </div>
    </>
  )
}