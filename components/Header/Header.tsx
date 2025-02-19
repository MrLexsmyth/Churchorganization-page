

import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <div className="detail">
            <h5 className="phone1"> <FontAwesomeIcon icon={faLocationDot} style={{ color: 'white', fontSize: '15px', marginRight: '8px'}} />No 19, Hassan Street, Odutola, Oke-Ado, Ibadan.</h5>
            <a href="tel:+2348053006678" className="phone"> 
            <FontAwesomeIcon icon={faPhone} style={{ color: 'white', fontSize: '15px', marginRight: '8px'}} /> (+234) 805 300 6678</a>
      </div>
      <div className="space">

      </div>
      <div className="social">
      <div className='icons'>
                <a href="http://https://facebook.com/groups/234019274379033/">
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'blue', fontSize: '15px' }} /> </a>
                <a href="https://https://www.instagram.com/cgprc?igsh=N2V4MmZtc3NlcXVw">
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'red', fontSize: '15px' }} /></a>
                <a href="https://wa.me/2348053006678">
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'green', fontSize: '15px' }} /></a>
              
                <a href="http://www.youtube.com/@CGPRC">
                <FontAwesomeIcon icon={faYoutube} style={{ color: 'red', fontSize: '15px' }} /></a>
            </div>

      </div>
        
    </div>
  )
}

export default Header;