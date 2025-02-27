import React from 'react'

export default function Render({fullName}) {
    return (
        <>
            <div id='render'>
                <div id='contentHeader'>
                    <h1>{fullName}</h1>
                </div>

                <div id='contentContact'>
                    <h3>{fullName}</h3>
                    <h3>{fullName}</h3>
                    <h3>{fullName}</h3>
                </div>
            </div>
            
        </>
    )
}