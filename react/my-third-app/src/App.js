import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Component/About';
import ContactUs from './Component/ContactUs';

import Home from './Component/Home'
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import NotFound from './Component/NotFound';


function App() {

  return (
   <BrowserRouter>
      <Navbar />   

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/profile/:id' element={<About />} />
        <Route path="*" element={<NotFound />} />

      </Routes>


   </BrowserRouter>

  );
}

export default App;
