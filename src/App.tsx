 import Navbar from '../components/Navbar/Navbar.tsx'
 import Header from '../components/Header/Header.tsx';
 import Footer from '../components/Footer/Footer.tsx'
 import { Routes, Route } from 'react-router-dom';
 import Home from './Home.tsx';
 import About from "./About.tsx";
 import Give from "./Give.tsx";
 import Contact from './Contact.tsx';
 import Services from './Services.tsx';
 import './App.css'

const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/give" element={<Give />} />
      </Routes>
     
   <Footer />
    </>
  );
};

export default App;
