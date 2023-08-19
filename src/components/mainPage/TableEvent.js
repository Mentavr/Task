import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { storeSlector } from '../../slice/eventStoreSlice';
import { format } from 'date-fns';
import { fromUnixTime } from 'date-fns';

const TableEvent = () => {
  const eventsStore = useSelector(storeSlector);
  
  const createData = (ctime, event) => {
    return { ctime, event };
  };

  const rowRef = useRef(null);

  const rowsHeader = eventsStore
    .filter((item) => item !== null)
    .map((item) => {
      const date = format(fromUnixTime(item.ctime), 'dd.MM.yyyy HH:mm ');
      return createData(date, item.event);
    });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Дата</TableCell>
            <TableCell align='left'>Событие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsHeader.map((row) => (
            <TableRow
              ref={rowRef}
              key={row.crime}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.ctime}
              </TableCell>
              <TableCell align='left'>{row.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableEvent;
