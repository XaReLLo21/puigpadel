import React from 'react'
import Logo from '../../public/ajunt.png'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='patrocinadors'>Patrocinadors</p>
      <img src={Logo} height={'75px'} alt='logo' />
    </div>
  )
}

export default Footer
