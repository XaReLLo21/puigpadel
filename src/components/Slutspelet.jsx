import React from 'react'

const Slutspel = () => {
  return (
    <div className='bracket'>
      <div className='round'>
        <div className='match'>
          <div className='team'>Grup A - 1</div>
          <div className='team'>Grup B - 4</div>
        </div>
        <div className='match'>
          <div className='team'>Grup B - 2</div>
          <div className='team'>Grup A - 3</div>
        </div>
        <div className='match'>
          <div className='team'>Grup A - 2</div>
          <div className='team'>Grup B - 3</div>
        </div>
        <div className='match'>
          <div className='team'>Grup B - 1</div>
          <div className='team'>Grup A - 4</div>
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
