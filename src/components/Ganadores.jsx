import React from 'react'

const Ganadores = () => {
  return (
    <div className='container'>
      <div className='column'>
        <h3 className='team-cuatro'>Campions Tardor 2023</h3>
        <img src='felix.jpg' alt='Lluís i Fèlix' width={300} height={225} />
        <p className='team-cuatro'>Lluís i Fèlix</p>
      </div>
      <div className='column'>
        <h3 className='team-cuatro'>Campions Primavera 2024</h3>
        <img src='/boris.jpg' alt='Lluís i Fèlix' width={300} height={225} />
        <p className='team-cuatro'>Jaume i Boris</p>
      </div>
      <div className='column'>
        <h3 className='team-cuatro'>Campions Tardor 2024</h3>
        <img src='/champions.jpeg' alt='Winner 3' width={300} height={225} />
        <p className='team-cuatro'>Xavi i Marc</p>
      </div>
    </div>
  )
}

export default Ganadores
