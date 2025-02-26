import { useState } from 'react'
import './styles/style.css'
import MenuPersonalInfo from './components/MenuPersonalInfo.jsx'
import Render from './components/Render.jsx'
import Control from './components/Control.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='display'>
        <div className='menuColumn'>
          <MenuPersonalInfo 
            title = "Personal Information"
            />
        </div>
        <div className='docColumn'>
          <Control></Control>
          <Render></Render>
        </div>
      </div>
    </>
  )
}

export default App