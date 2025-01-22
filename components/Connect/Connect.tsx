
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Connect.css";
import { faFacebook, faInstagram, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';

const Connect = () => {
  return (
    <div className="connect">
          <h1 className="connect-text">
                Connect with us on <br />
                Our Social media platforms.
          </h1>
          <div className='icons'>
               <a href="http://https://facebook.com/groups/234019274379033/">
               <FontAwesomeIcon icon={faFacebook} style={{ color: 'blue', fontSize: '50px' }} /> </a>
               <a href="https://https://www.instagram.com/cgprc?igsh=N2V4MmZtc3NlcXVw">
               <FontAwesomeIcon icon={faInstagram} style={{ color: 'red', fontSize: '50px' }} /></a>
               <a href="https://wa.me/2348053006678">
               <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'green', fontSize: '50px' }} /></a>
               <a href="http://www.youtube.com/@CGPRC">
               <FontAwesomeIcon icon={faYoutube} style={{ color: 'red', fontSize: '50px' }} /></a>
          </div>

 </div>
  )
}

export default Connect