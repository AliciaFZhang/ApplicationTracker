import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
import Nav from './components/Nav';
import JobPos from './components/JobPos';
import Row from './components/Row';
const App: React.FC = () => {
  const [jobList, setJobList] = useState([]);
  let date1 = new Date();
  let date2 = new Date();

  useEffect(()=>{}, []);
  let list = [
    {recordId: 1,
    jobId: 1,
    jobTitle: "software engineer",
    company: "company A",
    status: "applied",
    updatedAt: date1.getDate()},
    {recordId: 2,
      jobId: 2,
      jobTitle: "software engineer",
      company: "company A",
      status: "applied",
      updatedAt: date2.getDate()}
  ];
  const handleSubmit = (newTitle: string, newCompany: string) => {
    return null;
  }
  return (
    <div className="App">
      <Nav handleSubmit={handleSubmit}/>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right">Job Title</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">UpdatedAt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row)=><Row row={row}/>)}
          </TableBody>
        </Table>
      </TableContainer>
      {list.map((job, index) => <JobPos key={index} job={job}/> )}

    </div>
  );
}

export default App;
