import React, {ReactFragment, useState} from 'react'



interface Props {
  job: {
    recordId: number,
    jobId: number,
    jobTitle: string,
    company: string,
    status: string,
    updatedAt: number
  }
  // handleDelete: (recordId: number, jobId: number, action: string)=>void;
}
const JobPos: React.FC<Props> = ({job}) => {
  const [open, setOpen] = useState(false);
  return (<></>);

}


export default JobPos;