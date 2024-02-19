/* eslint-disable react/prop-types */
function TeamList(props) {
    return (
        <table width='100%'>
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Players</th>
                    <th>Rank</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Points</th>
                </tr>
            </thead>

            <tbody>
                {props.teams.map((team) => (
                    <tr key={team.id}>
                        <td>{team.name}</td>
                        <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: '2rem' }}>
                            {team.players.map((player) => (
                                <div style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }} key={player.id}>
                                    <img src={player.avatar} alt={player.name} style={{ borderRadius: '100%' }} />
                                    <span>{player.name}</span>
                                </div>
                            ))}
                        </td>
                        <td>{team.rank}</td>
                        <td>{team.wins}</td>
                        <td>{team.losses}</td>
                        <td>{team.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TeamList;
