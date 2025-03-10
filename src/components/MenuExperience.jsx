import React from 'react'

export default function MenuExperience({setExperience, getExperience}){

    const lastInput = getExperience.length - 1;

    const newExperience = {
        id: getExperience[lastInput].id,
        company: getExperience[lastInput].company,
        title: getExperience[lastInput].title,
        start: getExperience[lastInput].start,
        end: getExperience[lastInput].end,
        location: getExperience[lastInput].location
    }

    const addExperience = () => {
        newExperience.id = getExperience[lastInput].id + 1; 
        console.log("Add Experience " + newExperience.id);
        setExperience(getExperience.concat(newExperience));
    }
    
    return (
        <div id='menu'> 
            <h1>Experience</h1>

            <h3>Title</h3>
            <input onChange={(e) => newExperience.title = e.target.value} placeholder={newExperience.title}/>

            <h3>Company</h3>
            <input onChange={(e) => newExperience.company = e.target.value} placeholder={newExperience.company}/>

            <h3>Start Date</h3>
            <input onChange={(e) => newExperience.start = e.target.value} placeholder={newExperience.start}/>

            <h3>End Date</h3>
            <input onChange={(e) => newExperience.end = e.target.value} placeholder={newExperience.end}/>

            <h3>Location</h3>
            <input onChange={(e) => newExperience.location = e.target.value} placeholder={newExperience.location}/>

            <button onClick={addExperience}>Add</button>
        </div>
    )
}

