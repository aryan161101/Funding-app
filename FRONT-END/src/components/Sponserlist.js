import React from "react";
import "./sponserlist.css"
import 'bootstrap/dist/css/bootstrap.css';
import CP11 from './images/CP11.jpg'
import { LiaNewspaper} from "react-icons/lia";
import CP12 from './images/CP12.jpg'
import CP13 from './images/CP13.jpg'
import CP14 from './images/CP14.jpg'
import CP15 from './images/CP15.jpg'
import CP16 from './images/CP16.jpg'
import CP17 from './images/CP17.jpg'
function Sponserlist(){
    return(
        <div>
        <div className="browse">
        <br></br>
        <h1 className="browse-text">Browse Companies </h1>
      </div> 

      <div>
      <img src={CP11} alt="poster" className="cp-first" />   
      </div>

      <div className="box-layout">
      <h5 className="news"> <LiaNewspaper/>  PROFILE</h5>
       
       <div>
       <img src={CP12} alt="poster" className="cp-second" /> 
       </div>

        <div className="para-second">

        <div className="para-second-text">
       <h4>Solution</h4>
       </div>
       <p>Our software automates an overwhelming process-providing 65% savings<br></br>
         and freeing paitients from debt
       </p>

       
       <div className='para-main-list'>
          <div className='para-container-list'>
       <div className='para-box-list'>
       <div className='para-text-list'>
        <div className='para-icon-list'>01</div>
      <p>Paitent Intake</p>
       </div>
       </div>
      
       <div className='para-box-list'>
       <div className='para-text-list'>
        <div className='para-icon-list'>02</div>
      <p>Analysis and Reduction</p>
       </div>
       </div>

       <div className='para-box-list'>
       <div className='para-text-list'>
        <div className='para-icon-list'>03</div>
      <p>Debt Resolution</p>
       </div>
       </div>
       </div>
       </div>

       </div>

       <div className="para-third">
        
         
       </div>
       

       <div className="para-four-text">
       <h4>Market size</h4>
       <img src={CP13} alt="poster" className="cp-four" /> 
       </div>
       
       <br></br>
       <div className="para-five">
       <h3 className="para-five-head"> Current Traction</h3>
       <br></br>
       <p className="para-five-text">We've aggregated $250M of Medical Debt while successfully<br></br>
       servicing $25M.<br></br>
       We've had ~$2M in revenue and have 20 employees. <br></br>
       Our goal for next round is to move to $1B in aggregation and <br></br>
       $250M in debt serviced
       </p>
       <br></br>
       </div>
    
    <div className="para-six">
    <h3 className="para-five-head">Debt Service Breakdown</h3>
    <p>product automation will give us the opportunity to 9x our serviceable debt</p>
    <img src={CP14} alt="poster" className="cp-six" /> 
    </div>
    <div className="para-seven">
      <h3 className="para-five-head">Business Model</h3>
    <p>We charge a fixed rate bill or a percentage of savings depending on product.<br></br>
    We automate product selection for patients</p>
    <div className="people">
      <h3 className="num_pe">Premium(current)</h3>
      <p className="text_pe"> custom solution for complex bills<br></br>
      <b className="text_pe_color">10%-25% </b>of savings <br></br>
      <b className="text_pe_col">10% </b>of signups qualify<br></br>
      $1.1k CAC <br></br>
      $3.3k LTV<br></br>
      <b className="text_pe_col">3x</b> LTV:CTV<br></br>
      1M People/$40B Debt
      </p>
    </div>
    <div className="peopl">
      <h3 className="num_p">Automated(future)</h3>
      <p className="text_p">EZ-File,Simple Reduce,Quick Assist<br></br>
      <b className="text_pe_colo">$49-$149</b>per bill<br></br>
      <b className="text_pe_co">90% </b>of signups qualify<br></br>
      $80 CAC(est) <br></br>
      $800 LTV(est)<br></br>
      <b className="text_pe_co">10x</b> LTV:CTV<br></br>
      50M People/$700B Debt
      </p>
    </div>
    </div>
    
    <div className="para-seve">
    <h3 className="para-five-head">How It Works</h3>
    <img src={CP15} alt="poster" className="cp-five" /> 
    </div>

    <div className="para-eig">
    <img src={CP16} alt="poster" className="cp-eig" /> 
    </div>
    <div className="para-ni">
    <img src={CP17} alt="poster" className="cp-ni" /> 
    </div>
    
    
    
    </div>
    
    </div>
 
    )
}

export default Sponserlist;



