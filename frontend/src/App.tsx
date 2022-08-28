import React, {useState, useEffect} from 'react';
import './App.css';
import JobPos from './components/JobPos';
import Nav from './components/Nav';

const App: React.FC = () => {
  const [jobList, setJobList] = useState([]);
  let date1 = new Date();
  let date2 = new Date();
  console.log('date',date1)
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
  ]
  const handleDelete = (recordId: number, jobId: number, action: string) => {
    return null;
  };
  const handleSubmit = (newTitle: string, newCompany: string) => {
    return null;
  }
  return (
    <div className="App">
      <Nav handleSubmit={handleSubmit}/>
     {list.map((job) =><JobPos key={job.recordId} job={job} handleDelete={handleDelete} /> )}

    </div>
  );
}

export default App;
