import React from 'react'

const Slutspel = () => {
  return (
    <div className='bracket'>
      <div className='round'>
        <div className='match'>
          <div className='team-cuatro'>Joel - Joaquim</div>
          <div className='team'>Àngel - Pol</div>
        </div>
        <div className='match'>
          <div className='team'> Dani - Olga</div>
          <div className='team-cuatro'>Jaume - Boris</div>
        </div>
        <div className='match'>
          <div className='team'>Josep - Eugeni</div>
          <div className='team-cuatro'>Lluís - Fèlix</div>
        </div>
        <div className='match'>
          <div className='team-cuatro'>Albert - Joan</div>
          <div className='team'>Javi - Magnus</div>
        </div>
      </div>
      <div className='round'>
        <div className='match'>
          <div className='team'>Joel - Joaquim</div>
          <div className='team-cuatro'>Jaume - Boris</div>
        </div>
        <div className='match'>
          <div className='team-cuatro'>Lluís - Fèlix</div>
          <div className='team'>Albert - Joan</div>
        </div>
      </div>
      <div className='round'>
        <div className='match'>
          <div className='team-cuatro'>Jaume - Boris</div>

          <div className='team-cuatro'>Lluís - Fèlix</div>
        </div>
      </div>
    </div>
  )
}

export default Slutspel
