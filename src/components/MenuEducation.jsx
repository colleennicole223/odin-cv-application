import React, { useState } from 'react'

export default function MenuEducation({getEducation, setEducation}) {

    
    const lastInput = getEducation.length-1;
    const index = 0;

    const newEducation = {
      id: getEducation[lastInput].id,
      university: getEducation[lastInput].university,
      degree: getEducation[lastInput].degree,
      start: getEducation[lastInput].start,
      end: getEducation[lastInput].end,
      location: getEducation[lastInput].location,
    }

    // The addEducation funct will get the current list and add one
    const addEducation = () => {
      newEducation.id = getEducation[lastInput].id + 1;
      console.log("Add Education " + newEducation.id);
      setEducation(getEducation.concat(newEducation));
    };

    const updateInterface = (id) => {
      console.log("Clicked existing item " + id);
    }
    
  return (

    <div id='menu'>

        <h1>Education</h1>

        <h3>University</h3>
        <input onChange={(e) => newEducation.university = e.target.value} placeholder={getEducation[index].university}/>

        <h3>Degree</h3>
        <input onChange={(e) => newEducation.degree = e.target.value} placeholder={newEducation.degree}/>

        <h3>Start Date</h3>
        <input onChange={(e) => newEducation.start = e.target.value} placeholder={newEducation.start}/>

        <h3>End Date</h3>
        <input onChange={(e) => newEducation.end = e.target.value} placeholder={newEducation.end}/>

        <h3>Location</h3>
        <input onChange={(e) => newEducation.location = e.target.value} placeholder={newEducation.location}/>

        <div id='menuEnd'>
          <button className='addButton' onClick={addEducation}>Add</button> 
        </div>
        
        {getEducation.map(function (education) {
          if(education.id == 0){
           }else{
          return (
            <div key={education.id}>
              <button onClick={updateInterface(education.id)} className='row'>
                <div className='circle'/>
                <div>
                  <div> {education.university} </div>
                  <div> {education.degree} </div>
                  <div> {education.location} </div>
                  <div> {education.start} - {education.end} </div>
                </div>
              </button>
              
              <div className='divider'/>
            </div>
          );}})}        
      
    </div>
  )
}

