import React from 'react'

const Slutspel = () => {
  // Mock group data
  const groupA = [
    'Marc | David 6 6',
    'Sergi | Pol 6 3',
    'Boris | Rafa 4 7 1',
    'Àngel | Jaume 6 0 4',
  ]
  const groupB = [
    'Marc | Xavi 6 6 ',
    'Regu | Miki',
    'Manuel | Andrés 7 4 3 ',
    'Equip B4 DSQ',
  ]
  const groupC = [
    'Joan | Albert',
    'Eloi | Joan Marc 6 6 6 ',
    'Vicens | Miki W.O.',
    'Nil | Miquel 2 1 ',
  ]
  const groupD = [
    'Àngel | Isma 4 6 6',
    'Javi | Magnus 6 6 6',
    'Josep | Eugeni 7 6',
    'Oriol | Dani 4 0',
  ]

  // Updated pairings to avoid top group teams meeting before semifinals
  const matchups = [
    { team1: groupA[0], team2: groupD[3] }, // 1st A vs 4th D
    { team1: groupB[1], team2: groupC[2] }, // 2nd B vs 3rd C
    { team1: groupC[0], team2: groupB[3] }, // 1st C vs 4th B
    { team1: groupD[1], team2: groupA[2] }, // 2nd D vs 3rd A
    { team1: groupB[0], team2: groupC[3] }, // 1st B vs 4th C
    { team1: groupA[1], team2: groupD[2] }, // 2nd A vs 3rd D
    { team1: groupD[0], team2: groupA[3] }, // 1st D vs 4th A
    { team1: groupC[1], team2: groupB[2] }, // 2nd C vs 3rd B
  ]

  return (
    <div className='bracket'>
      {/* 1/8 Finals */}
      <div className='round'>
        {matchups.map((match, index) => (
          <div key={index} className='match'>
            <div className='team'>{match.team1}</div>
            <div className='team'>{match.team2}</div>
          </div>
        ))}
      </div>

      {/* 1/4 Finals */}
      <div className='round'>
        <div className='match'>
          <div className='team-cuatro'>Marc | David</div>
          <div className='team-cuatro'>Vicens | Miki</div>
        </div>
        <div className='match'>
          <div className='team-cuatro'>Joan | Albert</div>
          <div className='team-cuatro'>Javi | Magnus</div>
        </div>
        <div className='match'>
          <div className='team-cuatro'>Xavi | Marc</div>
          <div className='team-cuatro'>Josep | Eugeni</div>
        </div>
        <div className='match'>
          <div className='team-cuatro'>Àngel | Isma</div>
          <div className='team-cuatro'>Eloi | Joan Marc</div>
        </div>
      </div>

      {/* Semifinals */}
      <div className='round'>
        <div className='match'>
          <div className='team'>Guanyador QF 1</div>
          <div className='team'>Guanyador QF 2</div>
        </div>
        <div className='match'>
          <div className='team'>Guanyador QF 3</div>
          <div className='team'>Guanyador QF 4</div>
        </div>
      </div>

      {/* Final */}
      <div className='round'>
        <div className='match'>
          <div className='team'>Guanyador SF 1</div>
          <div className='team'>Guanyador SF 2</div>
        </div>
      </div>
    </div>
  )
}

export default Slutspel
