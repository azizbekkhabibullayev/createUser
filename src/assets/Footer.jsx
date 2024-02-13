import './Footer.css'
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
function Footer() {
  return (
    <div  className='fotter'>
      <div className="foter-container container">
          <h1>Cuser</h1>
         
        <div className="adres">
        <a className='a' href="https://www.instagram.com/azizbek_habibullaev/"><BsInstagram /> <span className='span'></span> Instagram</a> 
          <a className='a' href="https://t.me/Azizbekdotcom"><BsTelegram /> <span className='span'></span> Telegram</a> 
          <a className='a' href="https://github.com/azizbekkhabibullayev/"><FaGithub/> <span className='span'></span> Git hub</a> 
        </div>
      </div>
      
    </div>
  )
}

export default Footer;
