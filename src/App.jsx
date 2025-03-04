import { useState } from 'react'
import './styles/style.css'
import MenuPersonalInfo from './components/MenuPersonalInfo.jsx'
import Render from './components/Render.jsx'
import Control from './components/Control.jsx'
import MenuEducation from './components/MenuEducation.jsx'


function App() {

  // 👩‍🦰 Store personal information, updated through MenuPersonalInfo
  const [getPersonal, setPersonal] = useState({
    name: "Full Name", 
    phoneNumber:"(#) ###-###-####",
    email: "username@email.com",
    location:"City, ST",
  });

  // 🏫 Store education experience, updated through MenuEducation
  const [getEducation, setEducation] = useState({
    university: "University Name",
    degree: "Degree Earned",
    start: "MM/YY",
    end: "MM/YY",
    location: "City, ST"
  });

  // 🏢 Store work experience, updated through MenuExperience
  const [getExperience, setExperience] = useState({
    company: "Company name",
    title: "Role title",
    start: "MM/YY",
    end: "MM/YY",
    location: "City, ST"
  });

  return (
    <>
      <div className='display'>

        <div className='menuColumn'>
          <MenuPersonalInfo 
            setPersonal = {setPersonal}
            getPersonal = {getPersonal}
            />
          <MenuEducation
            setEducation = {setEducation}
            getEducation = {getEducation}
          />
        </div>

        <div className='docColumn'>
          <Control></Control>
          <Render 
            fullName = {getPersonal.name}
            email = {getPersonal.email}
            phoneNumber={getPersonal.phoneNumber}
            location={getPersonal.location}
            education={getEducation}
            />
        </div>

      </div>
    </>
  )
}

export default App