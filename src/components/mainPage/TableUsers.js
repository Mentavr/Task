import React, {useRef, useState } from 'react';
import { userDataSlicer, userData } from "../../slice/apiDataSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { removeUser } from "../../slice/apiDataSlice";
import { format } from 'date-fns'
import { fromUnixTime } from 'date-fns'


const TableUsers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const rowRef = useRef(null);
  const dispatch = useDispatch();
  const dataItems = useSelector(userDataSlicer);

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
    await dispatch(userData(newPage))
  };

  const handleChangeRowsPerPage = async (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    const createData = (id, name, role, ctime) =>  {
        return { id, name, role, ctime };
      }

      const rowsHeader = dataItems.map((item) => {
        const date = format(fromUnixTime(item.ctime), 'dd.MM.yyyy HH:mm ')
        return createData(item.id, item.name, item.role, date )
    });

      
    const handleRemove = (id) => {
      console.log(id)
        return dispatch(removeUser(id));
    }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell align="right">Имя</TableCell>
          <TableCell align="right">Роль</TableCell>
          <TableCell align="right">Дата создания</TableCell>
          <TableCell align="center">Действия</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rowsHeader.map((row) => (
          <TableRow
            ref={rowRef}
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{row.id}</TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.role}</TableCell>
            <TableCell align="right">{row.ctime}</TableCell>
            <TableCell align="center"><Button onClick={() => handleRemove(row.id)}>Удалить</Button></TableCell>
          </TableRow>
        ))}
       </TableBody>
    </Table>
    <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={15}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
  </TableContainer>
  );
}
export default TableUsers; 
