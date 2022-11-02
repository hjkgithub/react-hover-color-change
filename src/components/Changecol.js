import React, { useState } from 'react'
//import './App.css';
import '../../../hover-color-change/src/App.css'
import logo from '../../src/logo.svg'
import { useEffect } from 'react'



const white = {background : 'white'}
const blue = {background : 'blue'}


function Changecol() {
    const [color, setColor ] = useState(white)


  return (
    <> 
    <div>Changecol</div>
    <div className='App'>
        <h1> hihihihihi</h1>
       <div 
         onMouseEnter={
          () => setColor(blue)
       }

       style = {color}>
        i change on hover

        </div>
        </div>
    </>
  )
}

export default Changecol