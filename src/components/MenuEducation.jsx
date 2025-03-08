import React from 'react'

export default function MenuEducation({getEducation, setEducation}) {

    const newEducation = {
      id: 0,
      university: "",
      degree: "",
      start: "",
      end: "",
      location: ""
    }

    // The addEducation funct will get the current list and add one
    const addEducation = () => {
      newEducation.id = getEducation[getEducation.length-1].id + 1;
      console.log("Add Education " + newEducation.id);
      setEducation(getEducation.concat(newEducation));
    };
    
  return (

    <div id='menu'>
        <h1>Education</h1>

        <h3>University</h3>
        <input onChange={(e) => newEducation.university = e.target.value} placeholder={getEducation.university}/>

        <h3>Degree</h3>
        <input onChange={(e) => newEducation.degree = e.target.value} placeholder={getEducation.degree}/>

        <h3>Start Date</h3>
        <input onChange={(e) => newEducation.start = e.target.value} placeholder={getEducation.start}/>

        <h3>End Date</h3>
        <input onChange={(e) => newEducation.end = e.target.value} placeholder={getEducation.end}/>

        <h3>Location</h3>
        <input onChange={(e) => newEducation.location = e.target.value} placeholder={getEducation.location}/>

        <button onClick={addEducation}>Add</button>
                
    </div>

  )
}