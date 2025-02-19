import Connect from '../components/Connect/Connect';
import Slider from '../components/Slider/Slider';
// import Anima from '../components/Anima/Anima';
import Footer from '../components/Footer/Footer';

const Home = () => {

    return (
      <>
       <div> 
          <Slider />
          <Connect />
          {/* <Anima /> */}
          <Footer />
       </div>
      </>
    )
  }

export default Home