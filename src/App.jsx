import { useState } from 'react'
import './styles/style.css'
import MenuPersonalInfo from './components/MenuPersonalInfo.jsx'
import Render from './components/Render.jsx'
import Control from './components/Control.jsx'


function App() {
  const [getPersonal, setPersonal] = useState({
    name: "Full Name", 
    phoneNumber:"(#) ###-###-####",
    email: "username@email.com",
    location:"Location",
  });

  

  return (
    <>
      <div className='display'>
        <div className='menuColumn'>
          <MenuPersonalInfo 
            setPersonal = {setPersonal}
            getPersonal = {getPersonal}
            />
        </div>
        <div className='docColumn'>
          <Control></Control>
          <Render 
            fullName = {getPersonal.name}
            email = {getPersonal.email}
            phoneNumber={getPersonal.phoneNumber}
            location={getPersonal.location}
            />
        </div>
      </div>
    </>
  )
}

export default App