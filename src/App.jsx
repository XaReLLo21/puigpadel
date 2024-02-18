import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const response = await fetch('http://localhost:3000/teams');
      const data = await response.json();
      //console.log(data);
      setTeams(data);
    };
    getTeams();
  }, []);

  return (
    <div className='leaderboard-container'>
      <h1>Padel League Leaderboard </h1>
      <table className='leaderboard-table'>
        <thead>
          <tr>
            <th>Team</th>
            <th>Rank</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.rank}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
