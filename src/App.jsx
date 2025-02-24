import { useState } from 'react'
import './styles/style.css'
import Menu from './components/Menu.jsx'
import Render from './components/Render.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='display'>
        <div className='menuColumn'>
          <Menu></Menu>
        </div>
        <div className='docColumn'>
          <Render></Render>
        </div>
      </div>
    </>
  )
}

export default App