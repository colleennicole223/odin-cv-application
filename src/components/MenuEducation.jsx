import React, { useState } from 'react'

export default function MenuEducation({getEducation, setEducation}) {

    // set up initial state condition
    const [currentEducation, setCurrentEducation] = useState({
      id: getEducation.length > 0 ? getEducation[getEducation.length - 1].id : 1,
      university: "",
      degree: "",
      start: "",
      end: "",
      location: "",
    });

    // state to track which education entry is being edited (null if new)
    const [editingIndex, setEditingIndex] = useState(null);

    // handle input change and update state
    const handleInputChange = (e) => {
      setCurrentEducation({
        // maintain existing fields, but update field being edited 
        ...currentEducation,
        [e.target.name]: e.target.value, 
      });
    };

    // add new entry or update existing one 
    const updateEducation = () => {
      if(editingIndex !== null){
        // update existing entry 
        const updateList = [...getEducation];
        updateList[editingIndex] = currentEducation;
        setEducation(updateList);
        setEditingIndex(null);
      }else{
        // add new entry
        setEducation([...getEducation, {...currentEducation, id: getEducation.length}]);
      };
      // TO DO: update id to length - 1 and see if that fixes shift 

      // reset input fields after update 
      setCurrentEducation({
        id: getEducation.length, 
        university: "",
        degree: "",
        start: "",
        end: "",
        location: ""
      });
    };

    // update input when existing entry selected 
    const updateInterface = (index) => {
      // set current education to selected entry values 
      setCurrentEducation(getEducation[index]);

      // set entry to be edited
      setEditingIndex(index);
    }
    
  return (

    <div id='menu'>

      <h1>Education</h1>

      <h3>University</h3>
      <input 
          name='university'
          value={currentEducation.university}
          onChange={handleInputChange}
          placeholder={"Enter university name"}
        />

      <h3>Degree</h3>
      <input 
          name='degree'
          value={currentEducation.degree}
          onChange={handleInputChange}
          placeholder={"Enter degree"}
        />

      <h3>Start Date</h3>
      <input 
          name='start'
          value={currentEducation.start}
          onChange={handleInputChange}
          placeholder={"Enter start date"}
        />
        
      <h3>End Date</h3>
      <input 
          name='end'
          value={currentEducation.end}
          onChange={handleInputChange}
          placeholder={"Enter end date"}
        />
        
      <h3>Location</h3>
      <input 
          name='location'
          value={currentEducation.location}
          onChange={handleInputChange}
          placeholder={"Enter location"}
          />

      {/* Update button text based on editing or adding item */}
      <div id='menuEnd'>
        <button className='addButton' onClick={updateEducation}>
          {editingIndex != null ? "Update" : "Add"}
        </button> 
      </div>

      {/* List entries */}
      {getEducation
        // _, in .filter out the first index.. thanks gpt. 
        .filter((_, index) => index != 0) 
        .map((education, index) => (
          <button
            className='row'
            key={education.id}
            onClick={() => updateInterface(education.id)}>
              <div className='circle'/>
              <div>
                <div> {education.university} </div>
                <div> {education.degree} </div>
                <div> {education.location} </div>
                <div> {education.start} - {education.end} </div>
              </div>
          </button>
      ))}
      
    </div>
  )
}

