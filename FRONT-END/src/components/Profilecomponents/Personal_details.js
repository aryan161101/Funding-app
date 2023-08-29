import React from "react";
import Profile from "../Profile";
import styles from "./personal.module.css";
import { MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



function details(){
    return(
        <>
        <Profile />
        <div className={styles.personal}>
          <h2>Your Details</h2>
          <div className={styles.name}>
            <label>Name:</label>
            <MDBInput label='Name' type='text' id='formWhite' defaultValue={'StartHub'} />
          </div>
          <div className={styles.name}>
            <label>Email:</label>
            <MDBInput label='Email' type='email' id='formWhite' defaultValue={'StartHub@gmail.com'} />
          </div>
          <div className={styles.name}>
            <label>Profession:</label>
            <MDBInput label='Profession' type='text' id='formWhite' defaultValue={'Student'} />
          </div>
          <div className={styles.name}>
            <label>Gender:</label>
            <MDBInput label='Gender' type='text' id='formWhite' defaultValue={'Male'} />
          </div>
          <div className={styles.name}>
            <label>College:</label>
            <MDBInput label='College' type='text' id='formWhite' defaultValue={'JNTUK'} />
          </div>
          <div className={styles.name}>
            <label>Bio:</label>
            <MDBInput label='Bio' as='textarea' rows={5} id='formWhite' defaultValue={"Loremipsumdolorsitamet,."} style={{ height:'100px' }} />
          </div>
          <br/><br/>

          <button className={styles.update}>Update</button>
          <button className={styles.cancel}>Cancel</button>
        </div>
    
        </>
    )
}

export default details;