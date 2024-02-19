import { useState, useEffect } from 'react'
import TeamList from './components/TeamList'

import './App.css'

function App() {
  const [teams, setTeams] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [sortedBy, setSortedBy] = useState(null)
  const [searchTeam, setSearchTeam] = useState(null)

  useEffect(() => {
    getTeams()
  }, [])

  const getTeams = async () => {
    try {
      const response = await fetch('http://localhost:3000/leagues')

      if (!response.ok) return setIsError(true)

      const data = await response.json()
      setTeams(data)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearchTeam = (event) => {
    const { value } = event.target
    setSearchTeam(value)
  }

  const filteredTeams = searchTeam !== null && searchTeam.length > 0
    ? teams.filter((team) => team.name.toLowerCase().includes(searchTeam.toLowerCase()))
    : teams

  const filteredTeamsSorted = sortedBy !== null && sortedBy.length > 0
    ? filteredTeams.sort((a, b) => b[sortedBy] - a[sortedBy])
    : filteredTeams

  return (
    <div>
      <h1>League</h1>

      <header>
        <button onClick={() => setSortedBy('wins')}>
          Wins
        </button>

        <button onClick={() => setSortedBy('losses')}>
          Losses
        </button>

        <button onClick={() => setSortedBy('points')}>
          Points
        </button>

        <input
          type='text'
          onChange={handleSearchTeam}
          placeholder='Filter name'
        />
      </header>


      <main>
        {teams.length > 0 && <TeamList teams={filteredTeamsSorted} />}

        {isLoading && <strong>Loading...</strong>}
        {isError && <strong>Fetch error. </strong>}
      </main>
    </div>
  )
}

export default App
