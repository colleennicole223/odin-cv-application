import React from 'react'

export default function Render({fullName, email, phoneNumber, location}) {
    return (
        <>
            <div id='render'>
                <div id='contentHeader'>
                    <h1>{fullName}</h1>
                </div>

                <div id='contentContact'>
                    <h3>{email}</h3>
                    <h3>{phoneNumber}</h3>
                    <h3>{location}</h3>
                </div>
            </div>
            
        </>
    )
}