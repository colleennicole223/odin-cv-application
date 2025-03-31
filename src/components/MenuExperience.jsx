import React, { useState } from 'react'

export default function MenuExperience({setExperience, getExperience}){

    // set up current experience structure 💪
    const [getCurrentExperience, setCurrentExperience] = useState({
        id: getExperience.length > 0 ? getExperience[getExperience.length - 1].id : 1,
        title: "",
        company: "",
        start: "",
        end: "",
        location: "",
    });

    // track what index we are editing, null if adding 📃
    const [editingIndex, setEditingIndex] = useState(null);

    // listen for changes to input and then update current experience state 
    const handleInputChange = (e) => {
        // if something changes, lets change current experience with only what changed
        setCurrentExperience({
            ...getCurrentExperience,
            [e.target.name]: e.target.value,
        });
    };

    // update or add experience 🔨
    const updateExperience = () => {
        if(editingIndex != null){
            // copy experience and update specific index 
            const updatedList = [...getExperience];
            updatedList[editingIndex] = getCurrentExperience;
            setExperience(updatedList); 
            setEditingIndex(null);
        }else{
            // add a new entry 
            setExperience([
                ...getExperience,
                {...getCurrentExperience, id: getExperience.length}
            ])
        };

        // reset currentExperience 
        setCurrentExperience({
            id: getExperience.length,
            title: "",
            company: "",
            start: "",
            end: "",
            location: "",
        });
    }

    // update the interface to display entries 🖥️
    const updateInterface = (index) => {
        console.log("index "+index)
        // set current experience to the index of entry chosen
        setCurrentExperience(getExperience[index])
        
        // set editing index 
        setEditingIndex(index);
    }
    
    return (
        
        <div id='menu'> 

            <h1>Experience</h1>

            <h3>Title</h3>
            <input
                name='title'
                value={getCurrentExperience.title}
                onChange={handleInputChange}
                placeholder={"Enter job title"}
                />
            
            <h3>Company</h3>
            <input
                name='company'
                value={getCurrentExperience.company}
                onChange={handleInputChange}
                placeholder={'Enter company name'}/>
            
            <h3>Start Date</h3>
            <input
                name='start'
                value={getCurrentExperience.start}
                onChange={handleInputChange}
                placeholder={'Enter start date'}/>
            
            <h3>End Date</h3>
            <input
                name='end'
                value={getCurrentExperience.end}
                onChange={handleInputChange}
                placeholder={'Enter end date'}/>
            
            <h3>Location</h3>
            <input
                name='location'
                value={getCurrentExperience.location}
                onChange={handleInputChange}
                placeholder={'Enter a location'}
                />
            
            <div id='menuEnd'>
                <button onClick={updateExperience}>
                    {editingIndex != null ? "Update" : "Add"}
                </button>
            </div>

            {getExperience
                .filter((_, index) => index != 0)
                .map((experience, index) => (
                    <button 
                        className='row'
                        key={experience.id}
                        // only run when clicked 🌟
                        onClick={() => updateInterface(experience.id)}>
                            <div className='circle'/>
                            <div>
                                <div> {experience.title} </div>
                                <div> {experience.company} </div>
                                <div> {experience.location} </div>
                                <div> {experience.start} - {experience.end} </div>
                            </div>

                    </button>
                ))}
            
        </div>
    )
}

