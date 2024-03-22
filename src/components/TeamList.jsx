function TeamList(props) {
  const sortedTeams = props.teams.sort((a, b) => {
    const pointsDiff = b.wins * 3 - a.wins * 3
    if (pointsDiff !== 0) {
      // If points are different, sort by points difference
      return pointsDiff
    } else {
      // If points are equal, sort by "Diferencia"
      return b.jocsfavour - b.jocscontra - (a.jocsfavour - a.jocscontra)
    }
  })

  return (
    <table>
      <thead>
        <h1>Grup 1</h1>
        <tr>
          <th>Team</th>
          <th>Players</th>
          <th>Rank</th>
          <th>Part Jugats</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Points</th>
          <th>Jocs Favor</th>
          <th>Jocs Contra</th>
          <th>Diferencia</th>
        </tr>
      </thead>

      <tbody>
        {sortedTeams.map((team, index) => (
          <tr key={team.id} className={index < 4 ? 'top-teams' : ''}>
            <td>{team.name}</td>
            <td className='player-list'>
              {team.players.map((player) => (
                <div className='player' key={player.id}>
                  <img src={player.avatar} alt={player.name} />
                  <span>{player.name}</span>
                </div>
              ))}
            </td>
            <td>{index + 1}</td>
            <td>{team.wins}</td>
            <td>{team.games}</td>
            <td>{team.losses}</td>
            <td>{team.wins * 3}</td>
            <td>{team.jocsfavour}</td>
            <td>{team.jocscontra}</td>
            <td>{team.jocsfavour - team.jocscontra}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TeamList
