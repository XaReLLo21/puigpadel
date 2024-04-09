import React from 'react'

function MatchTable({ matches }) {
  // Updated function to determine the winner of each set
  const getWinner = (sets) => {
    let score1 = 0
    let score2 = 0

    for (let set of sets) {
      const [setScore1, setScore2] = set.score.split('-').map(Number)

      if (setScore1 > setScore2) {
        score1++
      } else if (setScore1 < setScore2) {
        score2++
      }
    }

    return score1 > score2 ? 1 : score1 < score2 ? 2 : 0
  }

  // Filter matches to only include those with grup: 'A'
  const grupBMatches = matches.filter((match) => match.grup === 'A')

  return (
    <table>
      <thead>
        <tr>
          <th>Partit</th>
          <th>Equip 1</th>
          <th>Equip 2</th>
          <th>Set 1</th>
          <th>Set 2</th>
          <th>Set 3</th>
        </tr>
      </thead>
      <tbody>
        {grupBMatches.map((match) => (
          <tr key={match.id}>
            <td>{match.id}</td>
            <td>
              {getWinner(match.sets) === 1 ? (
                <strong>{match.teams[0].players.join(' / ')}</strong>
              ) : (
                match.teams[0].players.join(' / ')
              )}
            </td>
            <td>
              {getWinner(match.sets) === 2 ? (
                <strong>{match.teams[1].players.join(' / ')}</strong>
              ) : (
                match.teams[1].players.join(' / ')
              )}
            </td>
            <td>{match.sets[0].score}</td>
            <td>{match.sets[1].score}</td>
            <td>{match.sets[2] ? match.sets[2].score : '-'}</td>{' '}
            {/* Display '-' if third set doesn't exist */}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default MatchTable
