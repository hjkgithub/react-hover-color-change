import React, { useState } from 'react'
//import './App.css';
import '../../../hover-color-change/src/App.css'
import logo from '../../src/logo.svg'
import { useEffect } from 'react'


import styled from 'styled-components';


//sectionone  bg color imported from app.css
	

  
const HoverText = 
  styled.p`
	color: white;
  
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`


const words = ['Showcase', 'CaseStudy', 'Community', 'Meetup'];
const listItems = words.map((word) =>


  <ul>  
  <HoverText> 
    
    {word}
    
    </HoverText>
    </ul>


);



const Options = () => {
  
  return (

    <div>
           
       {listItems}
           
      </div>
  );
}
	


function ChangeTextColor() {
  
  return (

    <> 
     <header className="Sectionone">

       <HoverText>
          
          <Options/>
      
      </HoverText>

    </header>
  

</>

    )
}

export default ChangeTextColor