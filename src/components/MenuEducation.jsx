import React from 'react'

export default function MenuEducation({getEducation, setEducation}) {

    
    
  return (

    <div id='menu'>
        <h1>Education</h1>

        <h3>University</h3>
        <input placeholder={getEducation.university}/>

        <h3>Degree</h3>
        <input placeholder={getEducation.degree}/>

        <h3>Start Date</h3>
        <input placeholder={getEducation.start}/>

        <h3>End Date</h3>
        <input placeholder={getEducation.end}/>

        <h3>Location</h3>
        <input placeholder={getEducation.location}/>
    </div>

  )
}