import React, { useEffect, useState } from 'react'
import Profile from "../Profile";
import "./Idealist.css"
import { Link ,Routes, Route, useNavigate} from 'react-router-dom';

const Idealist = () => {
  const [ideas,setIdeas]=useState([]);
  useEffect(()=>{
   getideas();
  },[])

  const getideas=async()=>{
    let result = await fetch('http://localhost:5000/ideas');
    result = await result.json();
    setIdeas(result);

  }
  console.log("ideas",ideas);

  const deleteIdea = async (id)=>{
    let result = await fetch(`http://localhost:5000/idea/${id}`,{
      method:"Delete"
    });
   
     result = await result.json()
     if(result)
     {
      getideas();
     }
  };
  const navigate =useNavigate();
  const navigateToUpdate=()=>{
    navigate('./update')
  }
  const searchHandle=async(event)=>{
    event.preventDefault();
    let key =event.target.value;
   if(key){
    
    let result= await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if(result){
      setIdeas(result)
    }
  }else{
    getideas()
  }
  }
  return (
    <>
    <Profile />
    <div className="ilist">
      <div className='idea-list'>
      <h3 className='list-heading'>Idea's List</h3>
      <input type="text" placeholder='Search...'  className='search-idea'
      onChange={searchHandle} 
      />
      <ul className='profile-table'>
        <li className='profile-list'>S.No</li>
        <li className='profile-list'>Name</li>
        <li className='profile-list'>Idea</li>
        <li className='profile-list'>operation</li>
      </ul>
      {
        ideas.length>0? ideas.map((item,index)=>
        <ul key={item._id} className='profile-table'>
        <li className='profile-list'>{index+1}</li>
        <li className='profile-list'>{item.name}</li>
        <li className='profile-list'>{item.idea}</li>
       
        <li className='profile-list'>
          <button onClick={()=>deleteIdea(item._id)} className='del'>Delete</button>
          <Link to={"/update/"+item._id} className='upd'>Update</Link>
          </li>
        
      </ul>
        
        
        )
        :<h3 className='no-result'>No Result Found</h3>
      } 
      </div>
    </div>
    </>
  )
}

export default Idealist
