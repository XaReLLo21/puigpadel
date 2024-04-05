import React from 'react'

const Slutspel = () => {
  return (
    <div className='bracket'>
      <div className='round'>
        <div className='match'>
          <div className='team'>Grup 1 - 1</div>
          <div className='team'>Grup 2 - 4</div>
        </div>
        <div className='match'>
          <div className='team'>Grup 2 - 2</div>
          <div className='team'>Grup 1 - 3</div>
        </div>
        <div className='match'>
          <div className='team'>Grup 1 - 2</div>
          <div className='team'>Grup 2 - 3</div>
        </div>
        <div className='match'>
          <div className='team'>Grup 2 - 1</div>
          <div className='team'>Grup 1 - 4</div>
        </div>
      </div>
      <div className='round'>
        <div className='match'>
          <div className='team'>Guanyador</div>
          <div className='team'>Guanyador</div>
        </div>
        <div className='match'>
          <div className='team'>Guanyador</div>
          <div className='team'>Guanyador</div>
        </div>
      </div>
      <div className='round'>
        <div className='match'>
          <div className='team'>Guanyador</div>

          <div className='team'>Guanyador</div>
        </div>
      </div>
    </div>
  )
}

export default Slutspel
