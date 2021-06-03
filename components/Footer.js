import Image from 'next/image'

export default function Footer(){
  return(
    <>
      <div id="footer-container">
        <div id="footer-content">
          <div id="glyphs-container">
            <a href="#" id="facebook">
              <Image src="/icons/facebook.svg" width={20} height={20} />
            </a>
            <a href="#" id="instagram">
              <Image src="/icons/instagram.svg" width={20} height={20} />
            </a>
          </div>
          <p id="copyright">&copy; 2021 Fred Ramos</p>
        </div>
      </div>
    </>
  )
}