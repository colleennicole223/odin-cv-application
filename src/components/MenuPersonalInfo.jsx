import React from 'react'
import App from '../App'
export default function MenuPersonalInfo({title, fullName = "Melissa Meyers", 
    email = "meyers@email.com", phoneNumber = "+1 916 422 3825", address="Boston, MA", setFullName}) {


        
    return (
        <>
            <div id='menu'>
                <h1>{title}</h1>
                    
                <h3>Full Name</h3>
                <input defaultValue={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='First and Last Name'/>
                <h3>Email</h3>
                <input defaultValue={email}/>
                <h3>Phone Number</h3>
                <input defaultValue={phoneNumber}/>
                <h3>Address</h3>
                <input defaultValue={address}/>
                
            </div>
        </>
    )
}