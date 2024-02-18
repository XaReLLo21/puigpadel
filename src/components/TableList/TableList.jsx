/* eslint-disable react/prop-types */
import {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';
import { Table, Input, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import './TableList.css';

/**
 * Componente de tabla con capacidad de filtrado por columna.
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.rows - Datos para mostrar en la tabla.
 * @param {Array} props.columns - Columnas de la tabla.
 * @param {React.Ref} ref - Referencia para acceder a métodos del componente.
 * @returns {JSX.Element} Componente de tabla.
 */
const TableList = forwardRef((props, ref) => {
  const [rows, setRows] = useState(props.rows);
  const [columns, setColumns] = useState(props.columns);
  const [searchedColumn, setSearchedColumns] = useState();
  const searchInfo = useRef();

  useEffect(() => {
    setRows(props.rows);
  }, [props.rows]);

  useEffect(() => {
    setColumns(props.columns);
  }, [props.columns]);

  /**
   * Obtiene las propiedades de búsqueda de una columna.
   * @param {string} dataIndex - Índice de datos de la columna.
   * @returns {Object} Propiedades de búsqueda de la columna.
   */
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInfo}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type='primary'
          onClick={() => handleSearch(confirm, dataIndex)}
          icon={<FilterOutlined />}
          size='small'
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters, dataIndex, confirm)}
          size='small'
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <FilterOutlined
        className='icon'
        style={{ color: filtered ? '#1890ff' : undefined }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        if (searchInfo.current) setTimeout(() => searchInfo.current.select());
      }
    },
    render: (text) => (searchedColumn === dataIndex ? <p>{text}</p> : text),
  });

  /**
   * Maneja la búsqueda de una columna.
   * @param {Function} confirm - Función de confirmación del filtro.
   * @param {string} dataIndex - Índice de datos de la columna.
   */
  const handleSearch = (confirm, dataIndex) => {
    confirm();
    setSearchedColumns(dataIndex);
  };

  /**
   * Restablece los filtros de una columna.
   * @param {Function} clearFilters - Función para limpiar los filtros.
   * @param {string} dataIndex - Índice de datos de la columna.
   * @param {Function} confirm - Función de confirmación del filtro.
   */
  const handleReset = (clearFilters, dataIndex, confirm) => {
    clearFilters();
    handleSearch(confirm, dataIndex);
  };

  useImperativeHandle(ref, () => ({
    /**
     * Obtiene las propiedades de búsqueda de una columna.
     * @param {string} dataIndex - Índice de datos de la columna.
     * @returns {Object} Propiedades de búsqueda de la columna.
     */
    getColumnSearch(dataIndex) {
      return getColumnSearchProps(dataIndex);
    },
  }));

  return (
    <div className='responsive-table-container'>
      <Table
        style={{ fontFamily: 'Lato, sans-serif' }}
        size='small'
        columns={columns}
        dataSource={rows}
        rowKey={(record) => record.id}
        scroll={{ x: 600 }}
      />
    </div>
  );
});

TableList.displayName = 'TableList';

export default TableList;
