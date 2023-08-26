
import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Newsitems from './components/Newsitems';
import Footer from './components/Footer';
import {Routes,   Route, Link } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar/>
        {/* <News/> */}
        <Routes>
          <Route  path='/about' element={<About/>}/>
          <Route path='/main' element={<News/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        {/* <Newsitems/> */}
        
      
      </Routes>
      <Footer/>
      
      </div> 
      </>
    )
  }
}
