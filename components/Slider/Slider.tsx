
import "./Slider.css";


const Slider = () => {
  return (
    <>
        <div className='bg'>
          <img src={'/hero.jpg'} alt="About logo"  className='slider' /> 
        </div>
        <div className="contain">
               <h1 className="welcome-title">WELCOME TO THE <span>CHRIST GRACE</span> EXPERIENCE</h1>
               <blockquote>
               <p>God has given us a mandate to raise role models, and He has indeed been faithful, 
                  backing our dedication and hard work with a great harvest of transformed lives. 
                  It is top priority for us that you partake of wholesome worship, edifying messages
                  to build you up and positive interactions. We invite you to tour our website and get
                  to know us a bit better - our service times, locations and membership. There are also 
                  links should you wish to support our ministry by giving. We look forward to having the 
                  pleasure of hosting you and your family soon, either in person at one of our churches or virtually.</p>
               <strong><cite>In Christ, Pastor Adekunle Samuel.</cite></strong>
               </blockquote>
       </div>
      
    </>
  )
}

export default Slider;