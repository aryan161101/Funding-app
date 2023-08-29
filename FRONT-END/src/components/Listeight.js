import React from 'react'
import "./listeight.css"
import { LiaNewspaper} from "react-icons/lia";
import  CP81 from "./images/CP81.jpg"
import  CP82 from "./images/CP82.jpg"
import  CP83 from "./images/CP83.jpg"
import  CP84 from "./images/CP84.jpg"
import  CP85 from "./images/CP85.jpg"
import  CP86 from "./images/CP86.jpg"
import  CP87 from "./images/CP87.jpg"
const Listeight = () => {
  return (
    <div>
    <div className="bro">
        <br></br>
        <h1 className="browse-t">Browse Companies </h1>
      </div> 
      <div>
      <img src={CP81} alt="poster" className="cp-first" />   
      </div>
      <div className="box-layout">
      <h5 className="news"> <LiaNewspaper/>  PROFILE</h5>
      </div>
      <div className='desert'>
       <img src={CP82} alt="poster" className="cp-second" />
       </div>
       <div className='desert-two'>
       <img src={CP83} alt="poster" className="cp-second" />
       </div>
       <div className='desert-three'>
       <img src={CP84} alt="poster" className="cp-second" />
       </div>
       <div className='desert-four'>
       <img src={CP85} alt="poster" className="cp-second" />
       </div>
       <div className='desert-five'>
       <img src={CP86} alt="poster" className="cp-second" />
       </div>
       <div className='desert-six'>
       <img src={CP87} alt="poster" className="cp-second" />
       </div>

  
    </div>
  )
}

export default Listeight
