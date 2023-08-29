import React from 'react'
import "./listsix.css"
import { LiaNewspaper} from "react-icons/lia";
import  CP61 from "./images/CP61.jpg"
import  CP62 from "./images/CP62.jpg"
import  CP63 from "./images/CP63.jpg"
import  CP64 from "./images/CP64.jpg"
import  CP65 from "./images/CP65.jpg"
import  CP66 from "./images/CP66.jpg"
import  CP67 from "./images/CP67.jpg"
import  CP68 from "./images/CP68.jpg"
import  CP69 from "./images/CP69.jpg"

const Listsix = () => {
  return (
    <div>
      <div className="bro">
        <br></br>
        <h1 className="browse-t">Browse Companies </h1>
      </div> 
      <div>
      <img src={CP61} alt="poster" className="cp-first" />   
      </div>

      <div className="box-layout">
      <h5 className="news"> <LiaNewspaper/>  PROFILE</h5>
      </div>
      <div className='ayya'>
       <img src={CP62} alt="poster" className="cp-second" />
       </div>
       <div className='ayya-two'>
       <img src={CP63} alt="poster" className="cp-second" />
       </div>
       <div className='ayya-three'>
       <img src={CP64} alt="poster" className="cp-second" />
       </div>
       <div className='ayya-four'>
       <img src={CP65} alt="poster" className="cp-second" />
       </div>
       <div className='ayya-five'>
       <img src={CP66} alt="poster" className="cp-second" />
       </div>
       <div className='ayya-six'>
       <img src={CP67} alt="poster" className="cp-second" />
       </div>
       <div className='ayya-seven'>
       <img src={CP68} alt="poster" className="cp-second" />
       </div>
       <div className='ayya-eight'>
       <img src={CP69} alt="poster" className="cp-second" />
       </div>


    </div>
  )
}

export default Listsix
