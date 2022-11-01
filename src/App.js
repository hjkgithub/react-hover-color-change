import logo from './logo.svg';
import './App.css';
//import {useState} from 'react';



function App() {


  return (
    <>
    <div className="App">
      <header className="Sectionone">
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
      
      
    </div>
    </>
  );
}

export default App;
