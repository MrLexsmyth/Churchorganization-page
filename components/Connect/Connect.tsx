import React from "react"
import "./Connect.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';



const Connect = () => {
  return (
    <div className="connect"> 
          <h1 className="connect-text">
                Connect with us on <br />
                Our Social media platforms.
          </h1>
          
          <div className='connect-icons'>
               
               <a href="http://facebook.com/groups/234019274379033/">
               <FontAwesomeIcon icon={faFacebook} className="facebook-icon" style={{ color: 'blue', fontSize: '50px' }} /> </a>
               <a href="https://www.instagram.com/cgprc?igsh=N2V4MmZtc3NlcXVw">
               <FontAwesomeIcon icon={faInstagram} style={{ color: 'red', fontSize: '50px' }} /> </a>
               <a href="https://wa.me/2348053006678">
               <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'green', fontSize: '50px' }} /> </a>
               <a href="http://www.youtube.com/@CGPRC">
               <FontAwesomeIcon icon={faYoutube} style={{ color: 'red', fontSize: '50px' }} /> </a>
               
          </div>

 </div>
  )
}

export default Connect