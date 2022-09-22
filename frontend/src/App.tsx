import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Nav from './components/Nav';
import JobPos from './components/JobPos';
import Row from './components/Row';
import axios from 'axios';
const App: React.FC = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(()=>{
    axios.get('/job')
    .then((res:{data:[]})=> setJobList(res.data));
  }, []);

  const handleSubmit = (newTitle: string, newCompany: string, newStatus: string) => {
    axios.post('/job', {"company": newCompany, "position": newTitle, "status": newStatus})
    .then(() => axios.get('/job'))
    .then((res:{data:[]})=> setJobList(res.data))
  }

  function editJob({company, position, id, status}:{position:string, company: string,id: number, status:string}): void{
    axios.put(`/job/${id}`, {company, position, id, status})
    .then(() => axios.get('/job'))
    .then((res:{data:[]})=> setJobList(res.data))
  }

  function deleteJob(id:number):void {
    axios.delete(`/job/${id}`)
    .then(() => axios.get('/job'))
    .then((res:{data:[]})=> setJobList(res.data))
  }

  const styles: {[key:string]: React.CSSProperties} = {
    container: {
      width: 1000,
      marginLeft: 50
    }
  }
  return (
    <div className="App" style={styles.container}>
      {/* {jobList.length>0? <div data-testid="company">{jobList[0].company}</div>:<div>Hi</div>} */}
      <Nav handleSubmit={handleSubmit}/>
      <section>
        <TableContainer sx={{marginTop: '20px'}}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Company</TableCell>
                <TableCell align="right">Job Title</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">UpdatedAt</TableCell>
                <TableCell align="right">Modify</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobList.length>0? jobList.map((row)=><Row row={row} editJob={editJob} deleteJob={deleteJob}/>):<div></div>}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      {jobList.length>0? jobList.map((job, index) => <JobPos key={index} job={job}/> ):<div></div>}

    </div>
  );
}

export default App;
