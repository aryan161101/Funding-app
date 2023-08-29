import React from "react";
import styles from "./ideas.module.css";
import Profile from "../Profile";
import { useState } from "react";


function Details() {
  
   const [name,setName]=useState('');
   const [idea,setIdea]=useState('');

    const addIdea=async()=>{
      
      console.log(name,idea);
      const userId = JSON.parse(localStorage.getItem('user'))._id;
      let result =await fetch("http://localhost:5000/add-idea",{
        method:'post',
       body:JSON.stringify({name,idea,userId}),
       headers:{
        "Content-Type":'application/json'
       },
      });
      result =await result.json()
      console.log(result)
    }
   
  return (
    <>
   
      <Profile />
      <div className={styles.total}>
        <h1>Add Idea</h1>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" 
  value={name} onChange={(e)=>{setName(e.target.value)}}/>
   </div>nodemobn
   <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Idea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{height:'500px'}}  
  value={idea} onChange={(e)=>{setIdea(e.target.value)}}></textarea>
   </div>
   <button onClick={addIdea}>Add</button>
      </div>

    </>
  );
}

export default Details;
