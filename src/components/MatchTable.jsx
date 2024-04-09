import React from 'react'

function MatchTable({ matches }) {
  // Function to determine the winner of each set
  const getWinner = (setScore) => {
    const [score1, score2] = setScore.split('-').map(Number)
    return score1 > score2 ? 1 : score1 < score2 ? 2 : 0
  }

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
        {matches.map((match) => (
          <tr key={match.id}>
            <td>{match.id}</td>
            <td>
              {getWinner(match.sets[0].score) === 1 ? (
                <strong>{match.teams[0].players.join(' / ')}</strong>
              ) : (
                match.teams[0].players.join(' / ')
              )}
            </td>
            <td>
              {getWinner(match.sets[0].score) === 2 ? (
                <strong>{match.teams[1].players.join(' / ')}</strong>
              ) : (
                match.teams[1].players.join(' / ')
              )}
            </td>
            <td>{match.sets[0].score}</td>
            <td>{match.sets[1].score}</td>
            <td>{match.sets[2].score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default MatchTable
