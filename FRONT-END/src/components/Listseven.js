import React from 'react'
import "./listseven.css"
import { LiaNewspaper} from "react-icons/lia";
import  CP71 from "./images/CP71.jpg"
import  CP72 from "./images/CP72.jpg"
import  CP73 from "./images/CP73.jpg"
import  CP74 from "./images/CP74.jpg"
import  CP75 from "./images/CP75.jpg"
import  CP76 from "./images/CP76.jpg"
import  CP77 from "./images/CP77.jpg"
const Listseven = () => {
  return (
    <div>
      <div className="bro">
        <br></br>
        <h1 className="browse-t">Browse Companies </h1>
      </div> 
      <div>
      <img src={CP71} alt="poster" className="cp-first" />   
      </div>
      <div className="box-layout">
      <h5 className="news"> <LiaNewspaper/>  PROFILE</h5>
      </div>
      <div className='nest'>
       <img src={CP72} alt="poster" className="cp-second" />
       </div>
       <div className='nest-two'>
       <img src={CP73} alt="poster" className="cp-second" />
       </div>
       <div className='nest-three'>
       <img src={CP74} alt="poster" className="cp-second" />
       </div>
       <div className='nest-four'>
       <img src={CP75} alt="poster" className="cp-second" />
       </div>
       <div className='nest-five'>
       <img src={CP76} alt="poster" className="cp-second" />
       </div>
       <div className='nest-six'>
       <img src={CP77} alt="poster" className="cp-second" />
       </div>


    </div>
  )
}

export default Listseven
