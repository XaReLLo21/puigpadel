import { useState, useEffect } from 'react'
import TeamList from './components/TeamList'

import Header from './components/Header'
import { FaSearch } from 'react-icons/fa'

import './App.css'

function App() {
  const [teams, setTeams] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [sortedBy, setSortedBy] = useState(null)
  const [searchTeam, setSearchTeam] = useState(null)

  const $PrdURL =
    'https://my-json-server.typicode.com/XaReLLo21/puigpadel/leagues'

  const getTeams = async () => {
    try {
      const response = await fetch($PrdURL)

      if (!response.ok) return setIsError(true)

      const data = await response.json()
      setTeams(data)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTeams()
  }, [])

  const handleSearchTeam = (event) => {
    setSearchTeam(event.target.value)
  }

  const filteredTeams =
    searchTeam !== null && searchTeam.length > 0
      ? teams.filter((team) => {
          const teamNameMatches = team.name
            .toLowerCase()
            .includes(searchTeam.toLowerCase())
          const playerMatches = team.players.some((player) =>
            player.name.toLowerCase().includes(searchTeam.toLowerCase())
          )
          return teamNameMatches || playerMatches
        })
      : teams

  const filteredTeamsSorted =
    sortedBy !== null && sortedBy.length > 0
      ? filteredTeams
          .filter((team) => team.group !== '2')
          .sort((a, b) => b[sortedBy] - a[sortedBy])
      : filteredTeams.filter((team) => team.group !== '2')

  const filteredTeamsSorted2 = filteredTeams.filter(
    (team) => team.group === '2'
  )

  return (
    <div>
      <Header />

      <h1>Pàdel Primavera de Puigdàlber 2024 </h1>

      <header>
        <FaSearch style={{ color: 'lightgrey' }} />
        <input
          type='text'
          onChange={handleSearchTeam}
          placeholder='Buscar Equip i Jugadors'
          className='input'
        />
      </header>

      <main>
        <p>Grup 1</p>
        {teams.length > 0 && <TeamList teams={filteredTeamsSorted} />}

        {isLoading && <strong>Loading...</strong>}
        {isError && <strong>Fetch error. </strong>}
        {filteredTeamsSorted == 0 && <strong>No teams found</strong>}
      </main>
      <main>
        <p>Grup 2</p>
        {teams.length > 0 && <TeamList teams={filteredTeamsSorted2} />}

        {isLoading && <strong>Loading...</strong>}
        {isError && <strong>Fetch error. </strong>}
        {filteredTeamsSorted2 == 0 && <strong>No teams found</strong>}
      </main>
    </div>
  )
}

export default App
