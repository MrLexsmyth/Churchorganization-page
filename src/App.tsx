 import Navbar from '../components/Navbar/Navbar.tsx'
 import Header from '../components/Header/Header.tsx';
 import { Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';

import './App.css'

const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    
     <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
     
   
    </>
  );
};

export default App;
