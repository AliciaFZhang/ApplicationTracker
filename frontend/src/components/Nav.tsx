import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  handleSubmit: (newTitle: string, newCompany: string, newStatus: string) => void;
}
const Nav: React.FC<Props> = ({handleSubmit}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newStatus, setNewStatus] = useState("")
  return (
    <section>
      <h1>Application Tracker</h1>
      <div>
        <form onSubmit={()=> handleSubmit(newTitle, newCompany, newStatus)}>
          <FormControl sx={{margin: '0px 10px'}}>
            <InputLabel >Job Title</InputLabel>
            <Input value={newTitle}  onChange={(e)=>setNewTitle(e.target.value)}/>
          </FormControl>
          <FormControl>
            <InputLabel >Company</InputLabel>
            <Input value={newCompany}  onChange={(e)=>setNewCompany(e.target.value)}/>
          </FormControl>
          <FormControl variant="standard" sx={{margin: '0px 10px', minWidth:100}}>
            <InputLabel >Status</InputLabel>
            <Select
              value={newStatus}
              label={newStatus}
              onChange={(event:SelectChangeEvent)=>setNewStatus(event?.target.value)}>
              <MenuItem value="Applied">Applied</MenuItem>
              <MenuItem value="Phone Interview">Phone Interview</MenuItem>
              <MenuItem value="Techincal Interview">Technical Interview</MenuItem>
              <MenuItem value="Onsite Interview">Onsite Interview</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
              <MenuItem value="Offer">Offer</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{margin:"8px"}}>
            <Button variant="contained" type="submit">submit</Button>
          </FormControl>
        </form>
      </div>
    </section>
  )
}

export default Nav