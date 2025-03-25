import React from 'react'

export default function Render({getPersonal, getEducation, getExperience}) {
    return (
        <>
            <div id='render'>

                <div className='header'>
                        {getPersonal.name}

                        <div className='contact'>
                            <div>{getPersonal.email}</div>
                            |
                            <div>{getPersonal.phoneNumber}</div>
                            |
                            <div>{getPersonal.location}</div>
                        </div>
                </div>
                
                <div id='content'>
                    
                    <div className='subheader'>
                        Education
                    </div>
                    
                    <div>
                        {getEducation.map(function (education) {
                            if(education.id == 0){

                            }else{
                                return (
                                    <div className='item' key={education.id}>
                                        <div className='itemHeader'>
                                            <div>{education.degree}</div>
                                            <div>{education.start} - {education.end}</div>
                                        </div>
                                        <div>{education.university} in {education.location}</div>
                                    </div>
                                );
                            }
                        })}

                    <div className='subheader'>
                        Experience
                    </div>

                        {getExperience.map(function (experience) {
                            if(experience.id == 0){

                            }else{
                                return (
                                    <div className='item' key={experience.id}>
                                        <div className='itemHeader'>
                                            <div>{experience.title}</div>
                                            <div>{experience.start} - {experience.end}</div>
                                        </div>
                                        <div>{experience.company} in {experience.location}</div>
                                    </div>
                                );
                            }
                        })}

                    </div>
                </div>
            </div>
            
        </>
    )
}