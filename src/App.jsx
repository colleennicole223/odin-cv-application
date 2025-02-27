import { useState } from 'react'
import './styles/style.css'
import MenuPersonalInfo from './components/MenuPersonalInfo.jsx'
import Render from './components/Render.jsx'
import Control from './components/Control.jsx'


function App() {
  const [getfullName, setFullName] = useState("Melissa Meyers");

  return (
    <>
      <div className='display'>
        <div className='menuColumn'>
          <MenuPersonalInfo 
            title = "Personal Information"
            setFullName = {setFullName}
            />
        </div>
        <div className='docColumn'>
          <Control></Control>
          <Render fullName = {getfullName}></Render>
        </div>
      </div>
    </>
  )
}

export default App