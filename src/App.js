import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';



function App() {
  return (
    <div >
   <Navbar/>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
 
    </div>
  );
}

export default App;
