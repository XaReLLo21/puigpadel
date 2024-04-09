import React from 'react'

function MatchTable({ matches }) {
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
            <td>{match.teams[0].players.join(' / ')}</td>
            <td>{match.teams[1].players.join(' / ')}</td>
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
