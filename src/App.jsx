import { useState, useEffect } from 'react'
import TeamList from './components/TeamList'
import Header from './components/Header'
import { FaSearch } from 'react-icons/fa'
import { CgDice1, CgDice2, CgTrophy } from 'react-icons/cg'
import { FaRegQuestionCircle } from 'react-icons/fa'
import Slutspelet from './components/Slutspelet'
import './App.css'
import Funcionament from './components/Funcionament'
import Footer from './components/Footer'
import MatchTable from './components/MatchTable'
import MatchTableB from './components/MatchTableB'
import matchesDate from '../matches.json'

function App() {
  const [teams, setTeams] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showMatches, setShowMatches] = useState(false)

  const [sortedBy, setSortedBy] = useState(null)
  const [searchTeam, setSearchTeam] = useState(null)

  // Vi laddar in lagen fran db.json

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

  // Sökfunktionen pa lagnamn och spelare

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

  const handleToggleMatches = () => {
    setShowMatches((prevShowMatches) => !prevShowMatches) // Toggle the state
  }

  return (
    <div>
      <Header />

      <h1>Pàdel Primavera de Puigdàlber 2024 </h1>

      <header>
        <FaSearch style={{ color: 'lightgrey' }} />
        <input
          type='text'
          onChange={handleSearchTeam}
          placeholder='Cercar Equip i Jugadors'
          className='input'
        />
      </header>

      <main>
        <h1 style={{ color: 'steelblue' }}>Grup A</h1>
        {teams.length > 0 && <TeamList teams={filteredTeamsSorted} />}

        {isLoading && <strong>Loading...</strong>}
        {isError && <strong>Fetch error. </strong>}
        {filteredTeamsSorted == 0 && <strong>No teams found</strong>}
      </main>

      <h2
        style={{ color: 'steelblue', cursor: 'pointer' }}
        onClick={handleToggleMatches}
      >
        {showMatches ? '▾ Partits Jugats Grup A' : '▸ Partits Jugats Grup A'}
      </h2>

      {showMatches && (
        <div>
          <MatchTable matches={matchesDate.matches} />
        </div>
      )}
      <main>
        <h1 style={{ color: 'steelblue' }}>Grup B</h1>
        {teams.length > 0 && <TeamList teams={filteredTeamsSorted2} />}

        {isLoading && <strong>Loading...</strong>}
        {isError && <strong>Fetch error. </strong>}
        {filteredTeamsSorted2 == 0 && <strong>No teams found</strong>}
        <h2
          style={{ color: 'steelblue', cursor: 'pointer' }}
          onClick={handleToggleMatches}
        >
          {showMatches ? '▾ Partits Jugats Grup B' : '▸ Partits Jugats Grup B'}
        </h2>

        {showMatches && (
          <div>
            <MatchTableB matches={matchesDate.matches} />
          </div>
        )}
        <h2 className='space'>
          <CgTrophy
            style={{
              color: 'steelblue',
              width: '80px',
              height: '80px',
            }}
          />
        </h2>
        <Slutspelet />
        <FaRegQuestionCircle
          style={{
            color: 'steelblue',
            width: '70px',
            height: '70px',
            marginTop: '25px',
          }}
        />
        <Funcionament />
      </main>
      <Footer />
    </div>
  )
}

export default App
