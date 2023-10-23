import React from 'react'
import ClockReal from './ClockReal'

function Header() {
  return (
    <header className='header'>
        <img src="./images/Trollface.png" className='header-image'/>
        <h2 className='header-title'>Meme Generator</h2>
        <h4 className='header-clock'>
            <ClockReal/>
        </h4>
    </header>
  )
}
export default Header