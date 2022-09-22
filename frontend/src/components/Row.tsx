import React, {ReactFragment, useState} from 'react'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { editableInputTypes } from '@testing-library/user-event/dist/utils';
interface Props {
  row:  {
    position: string,
    company: string,
    status: string,
    date: number,
    id: number
  },
  editJob: ({company, position, id, status}: {company:string, position: string, id:number, status: string}) => void,
  deleteJob: (id: number) => void
}

const Row: React.FC<Props> =({row, editJob, deleteJob}) => {
  const [open, setOpen] = useState(false);
  const [eCompany, setECompany] = useState(row.company);
  const [ePosition, setEPosition] = useState(row.position);
  const [eStatus, setEStatus] = useState(row.status);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="right">{row.company}</TableCell>
        <TableCell align="right">{row.position}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">
          <Button variant="contained" color="success" onClick={()=>{setOpen((status)=>!status)}}>Edit</Button>
          <Button variant="contained" color="error"
          onClick={()=>{deleteJob(row.id)}}>Delete</Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><input  value={eCompany} onChange={(e)=>setECompany(e.target.value)}/></TableCell>
                    <TableCell><input value={ePosition} onChange={(e)=>setEPosition(e.target.value)}/></TableCell>
                    <TableCell><input value={eStatus} onChange={(e)=>setEStatus(e.target.value)}/></TableCell>
                    <TableCell><Button variant="outlined" onClick={()=>{ editJob({"company":eCompany,"position": ePosition, "status": eStatus,"id": row.id}); setOpen((status)=>!status)}}>Comfirm Change</Button></TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;