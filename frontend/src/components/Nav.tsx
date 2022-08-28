import React, { useState } from 'react'

interface Props {
  handleSubmit: (newTitle: string, newCompany: string) => void;
}
const Nav: React.FC<Props> = ({handleSubmit}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newCompany, setNewCompany] = useState("")
  return (
    <section>
      <h1>Application Tracker</h1>
      <div>
        <form onSubmit={()=>handleSubmit(newTitle, newCompany)}>
          <label>Job Title</label>
          <input value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
          <label>Company</label>
          <input value={newCompany} onChange={(e)=>setNewCompany(e.target.value)}/>
        </form>
      </div>
    </section>
  )
}

export default Nav