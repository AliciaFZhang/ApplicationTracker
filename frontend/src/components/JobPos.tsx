import React from 'react'

interface Props {
  job: {
    recordId: number,
    jobId: number,
    jobTitle: string,
    company: string,
    status: string,
    updatedAt: number
  },
  handleDelete: (recordId: number, jobId: number, action: string)=>void;
}
const JobPos: React.FC<Props> = ({job, handleDelete}) => {

  return (
    <div>
      <div>Position: {job.jobTitle}</div>
      <div>Company: {job.company}</div>
      <div>Status: {job.status}</div>
      <div>Updated_at: {job.updatedAt}</div>
      <button onClick={()=>handleDelete(job.recordId, job.jobId, 'delete')}>Delete</button>
    </div>
  )
}

export default JobPos