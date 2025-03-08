import React from 'react'

export default function Render({getPersonal, getEducation}) {
    return (
        <>
            <div id='render'>
                <div id='contentHeader'>
                    <h1>{getPersonal.name}</h1>
                </div>

                <div id='contentContact'>
                    <h3>{getPersonal.email}</h3>
                    <h3>{getPersonal.phoneNumber}</h3>
                    <h3>{getPersonal.location}</h3>
                </div>

                <div>
                    {getEducation.map(function (education) {
                        if(education.id == 0){

                        }else{
                            return (
                                <div key={education.id}>
                                    <div id='contentContact'>
                                        <h3>{education.degree}</h3>
                                        <h3>{education.start} - {education.end}</h3>
                                    </div>
                                    <div id='contentContact'>
                                        <h3>{education.university} in {education.location}</h3>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                
            </div>
            
        </>
    )
}