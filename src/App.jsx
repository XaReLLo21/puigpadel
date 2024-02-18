import { useEffect, useRef, useState } from 'react';
import TableList from './components/TableList/TableList';
import './App.css';

/**
 * Componente principal de la aplicación.
 * @component
 */
function App() {
  const [rows, setRows] = useState([]); // Estado para almacenar los datos de las filas de la tabla
  const [columns, setColumns] = useState(undefined); // Estado para almacenar las columnas de la tabla
  const grid = useRef(); // Referencia al componente TableList

  /**
   * Hook de efecto que se ejecuta al montar el componente para obtener los datos de los equipos.
   */
  useEffect(() => {
    /**
     * Función para obtener los equipos desde una API.
     * @async
     */
    const getTeams = async () => {
      try {
        const response = await fetch('http://localhost:3000/teams');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
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
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };
    getTeams();
  }, []);

  /**
   * Hook de efecto que se ejecuta para establecer las columnas de la tabla.
   */
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

  /**
   * Renderiza el componente App.
   * @returns {JSX.Element} Componente App
   */
  return (
    <div className='App'>
      <TableList ref={grid} rows={rows} columns={columns} />
    </div>
  );
}

export default App;
