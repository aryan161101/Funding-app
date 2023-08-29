import React from 'react'
import "./listfive.css"
import { LiaNewspaper} from "react-icons/lia";
import  CP51 from "./images/CP51.jpg"
import  CP52 from "./images/CP52.jpg"
import  CP53 from "./images/CP53.jpg"
import  CP54 from "./images/CP54.jpg"
import  CP55 from "./images/CP55.jpg"
import  CP56 from "./images/CP56.jpg"
import  CP57 from "./images/CP57.jpg"
import  CP58 from "./images/CP58.jpg"
import  CP59 from "./images/CP59.jpg"

const Listfive = () => {
  return (
    <div>
    <div className="bro">
        <br></br>
        <h1 className="browse-t">Browse Companies </h1>
      </div>       
      <div>
      <img src={CP51} alt="poster" className="cp-first" />   
      </div>

      <div className="box-layout">
      <h5 className="news"> <LiaNewspaper/>  PROFILE</h5>
      </div>
      <div className='mela'>
       <img src={CP52} alt="poster" className="cp-second" />
       </div>
       <div className='mela-two'>
       <img src={CP53} alt="poster" className="cp-second" />
       </div>
       <div className='mela-three'>
       <img src={CP54} alt="poster" className="cp-second" />
       </div>
       <div className='mela-four'>
       <img src={CP55} alt="poster" className="cp-second" />
       </div>
       <div className='mela-five'>
       <img src={CP56} alt="poster" className="cp-second" />
       </div>
       <div className='mela-six'>
       <img src={CP57} alt="poster" className="cp-second" />
       </div>
       <div className='mela-seven'>
       <img src={CP58} alt="poster" className="cp-second" />
       </div>
       <div className='mela-eight'>
       <img src={CP59} alt="poster" className="cp-second" />
       </div>



    </div>
  )
}

export default Listfive
