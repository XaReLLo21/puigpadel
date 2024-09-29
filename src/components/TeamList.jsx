function TeamList(props) {
  const sortedTeams = props.teams.sort((a, b) => {
    const pointsA = a.wins * 3 + a.games
    const pointsB = b.wins * 3 + b.games

    if (pointsA !== pointsB) {
      // If points are different, sort by points
      return pointsB - pointsA // Sorting in descending order
    } else {
      // If points are equal, sort by "Diferencia"
      return b.jocsfavour - b.jocscontra - (a.jocsfavour - a.jocscontra)
    }
  })

  return (
    <table>
      <thead>
        <tr>
          {/* <th>Equip</th> */}
          <th>Jugadors</th>
          <th>Rank</th>
          <th>Partits Jugats</th>
          <th>Victòries</th>
          <th>Derrotes</th>
          <th>Punts</th>
          <th>Jocs Favor</th>
          <th>Jocs Contra</th>
          <th>Diferencia</th>
        </tr>
      </thead>

      <tbody>
        {sortedTeams.map((team, index) => (
          <tr key={team.id} className={index < 4 ? 'top-teams' : ''}>
            {/* <td>{team.name}</td> */}
            <td className='player-list'>
              {team.players.map((player) => (
                <div className='player' key={player.id}>
                  <img src={'../boll.webp'} alt={player.name} />
                  <span>{player.name}</span>
                </div>
              ))}
            </td>
            <td>{index + 1}</td>
            <td>{team.games}</td>
            <td>{team.wins}</td>
            <td>{team.losses}</td>
            <td>{team.wins * 2 + team.games * 1}</td>
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
