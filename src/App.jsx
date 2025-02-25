import { useState } from 'react'
import './styles/style.css'
import Menu from './components/Menu.jsx'
import Render from './components/Render.jsx'
import Control from './components/Control.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='display'>
        <div className='menuColumn'>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
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