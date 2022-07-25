import React from 'react'

import Img1 from '../../Images/img.jpg'
import Img2 from '../../Images/img1.jpg'
import { Link } from "react-scroll";
import "./Home.css"


function Home() {
  return (
    <div>
       <Link to="SignIn" spy={true} smooth={true}>
      <button className="btnn" >LogIn</button>
      </Link>
       <img 
       src={Img1} className='Img1'></img>
       <img 
       src={Img2} className='Img2'></img>
       <p className='textTitle'>Challenge_Code</p>
       <div className='card'>
        <div  className='textSai'>
      <p >"the potential of the average person is like a huge ocean unsailed , a new continent unexplored, a word of possibilities waiting to be released and channeled toward some great good."</p>
    
      </div>
      <p className='textAu'>Brian Tracy.</p>
      <Link to="SignUp" spy={true} smooth={true}>
      <button className="btn" >Create an account</button>
      </Link>
       </div>

      
       
      
    </div>
  )
}

export default Home