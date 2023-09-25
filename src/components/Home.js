import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(Monday,Tuesday,Wednesday,Thursday,Friday,Saturday) {
  return {Monday,Tuesday,Wednesday,Thursday,Friday,Saturday};
}

const rows = [
  createData('09:00','09:00','09:00','09:00','09:00','09:00'),
  createData('10:00','10:00','10:00','10:00','10:00','10:00'),
  createData('11:00','11:00','11:00','11:00','11:00','11:00'),
  createData('13:00','13:00','13:00','13:00','13:00','13:00'),
  createData('14:00','14:00','14:00','14:00','14:00','14:00'),
  createData('15:00','15:00','15:00','15:00','15:00','15:00'),
  createData('16:00','16:00','16:00','16:00','16:00','16:00'),
  createData('17:00','17:00','17:00','17:00','17:00','17:00'),
  createData('18:00','18:00','18:00','18:00','18:00','18:00')
];

export default function BasicTable() {
    const cellStyle = {
        border: '1px solid black',
        padding: '12px', 
        textAlign: 'center', 
        fontSize: '15px',
        borderRadius: '30%',
        
      };
  return (
    
    <div style={{ display: 'flex', height: 'auto',justifyContent: 'center' , marginTop:'2%'}}>
         <div style={{ textAlign: 'center' }}>
    <TableContainer component={Paper}>
      <Table sx={{ width: 800}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell >Time</TableCell> */}
            <TableCell style={{cellStyle, backgroundColor: '#F73718'}}>Monday</TableCell>
            <TableCell style={{cellStyle, backgroundColor: '#F73718'}}>Tuesday</TableCell>
            <TableCell style={{cellStyle, backgroundColor: '#F73718'}}>Wednesday</TableCell>
            <TableCell style={{cellStyle, backgroundColor: '#F73718'}}>Thursday</TableCell>
            <TableCell style={{cellStyle, backgroundColor: '#F73718'}}>Friday</TableCell>
            <TableCell style={{cellStyle, backgroundColor: '#F73718'}}>Saturday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Monday}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
               <TableCell style={cellStyle}>{row.Monday}</TableCell>
               <TableCell style={{cellStyle, backgroundColor: row.Tuesday === '09:00' ? '#F73718' : 'white' }}>{row.Monday}</TableCell>
              <TableCell style={cellStyle}>{row.Wednesday}</TableCell>
              <TableCell style={cellStyle}>{row.Thursday}</TableCell>
              <TableCell style={cellStyle}>{row.Friday}</TableCell>
              <TableCell style={cellStyle}>{row.Saturday}</TableCell>
            </TableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant='contained' sx={{bgcolor:"#F73718",marginTop:'2%'}}>  Date and Time </Button>
    </div>
    </div>
    
  );
}
    

   