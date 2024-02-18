import { useEffect, useRef, useState } from 'react';
import './App.css';
import TableList from './components/TableList/TableList';

function App() {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState(undefined);
  const grid = useRef();

  useEffect(() => {
    const getTeams = async () => {
      const response = await fetch('http://localhost:3000/teams');
      const data = await response.json();

      if (data.length > 0) {
        setRows(
          data.map((item) => {
            return {
              ...item,
              name: item.name,
              rank: item.rank,
              wins: item.wins,
              losses: item.losses,
              points: item.points,
            };
          })
        );
      }
    };
    getTeams();
  }, []);

  useEffect(() => {
    setColumns([
      {
        title: 'Team',
        dataIndex: 'name',
        key: '0',
        width: 80,
        fixed: 'left',
        ...grid.current.getColumnSearch('name'),
      },
      {
        title: 'Rank',
        dataIndex: 'rank',
        key: '1',
        width: 50,
        ...grid.current.getColumnSearch('rank'),
      },
      {
        title: 'Wins',
        dataIndex: 'wins',
        key: '2',
        width: 50,
        ...grid.current.getColumnSearch('wins'),
      },
      {
        title: 'Losses',
        dataIndex: 'losses',
        key: '3',
        width: 50,
        ...grid.current.getColumnSearch('losses'),
      },
      {
        title: 'Points',
        dataIndex: 'points',
        key: '4',
        width: 50,
        ...grid.current.getColumnSearch('points'),
      },
    ]);
  }, []);

  return (
    <div className='App'>
      <TableList ref={grid} rows={rows} columns={columns} />
    </div>
  );
}

export default App;
