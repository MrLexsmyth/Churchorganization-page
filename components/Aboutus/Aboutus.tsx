
import "./Aboutus.css"; 

const Aboutus = () => {
  return ( <div className="aboutus">
               <div className="details">
                   <div className="mission">
                       <h2 className="mission-header">Our Mission</h2>
                          <p className="mission-p">
                                   <span>
                                     Leading people into the knowledge of God through an in-depth study of The Word of God, prevailing prayer, and spiritual worship!
                                   </span>
                          </p>
                   </div>
                   <div className="vision">
                        <div className="box">
                          <h2 className="vision-header">Our Vision</h2>
                          <p className="vision-p">Soul winning and spiritual re-awakening of the world!</p>
                        </div>
                        <div className="box1">
                           <h2 className="vision-header1">Our Motto</h2>
                           <p className="vision-p1">Do not be deceived: God is not mocked, for whatever one sows, that will he also reap (Galatians 6:7).</p>
                        </div>
                    </div>
              </div>
            
        </div>
  )
}

export default Aboutus