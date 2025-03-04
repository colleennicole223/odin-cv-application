import React from 'react'

export default function MenuPersonalInfo({setPersonal, getPersonal}) {
  
    return (
        <>
            <div id='menu'>
                <h1>Personal Information</h1>
                    
                <h3>Full Name</h3>
                <input onChange={(e) => setPersonal({...getPersonal, name: e.target.value})} placeholder={getPersonal.name}/>
                
                <h3>Email</h3>
                <input onChange={(e) => setPersonal({...getPersonal, email: e.target.value})} placeholder={getPersonal.email}/>
                
                <h3>Phone Number</h3>
                <input onChange={(e) => setPersonal({...getPersonal, phoneNumber: e.target.value})} placeholder={getPersonal.phoneNumber}/>
                
                <h3>Address</h3>
                <input onChange={(e) => setPersonal({...getPersonal, location: e.target.value})} placeholder={getPersonal.location}/>
            </div>
        </>
    )
}