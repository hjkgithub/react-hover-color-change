import React, { useState } from 'react'
//import './App.css';
import '../../../hover-color-change/src/App.css'
import logo from '../../src/logo.svg'
import { useEffect } from 'react'



function ChangeColor() {
  
  return (

    <> 
    
    
    <header className="Sectionone">

      {/*  
    */}
    
    <img src={logo} className="App-logo" alt="logo" />
    
    
    <p className="sectionone-text">
      I am section one   <code> </code> and i am Black.
    </p>

   
    </header>


  
    <header className="Sectiontwo">
    <img src={logo} className="App-logo-reverse" alt="logo-reverse" />
    <p class="sectiontwo-text">
      I Am section<code> </code> Two and i am White.
    </p>
    </header>
  
  


        </>
    )
}

export default ChangeColor