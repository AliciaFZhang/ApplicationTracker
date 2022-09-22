import React from 'react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import axiosMock from 'axios';


const data = [{position: "Data Scientist", company: "MicroSoft", id: 5, date: new Date(), status:"Offer"}]

describe("Load job positions", ()=> {
  afterEach(cleanup);
  test('fetch and display data', async ()=>{
    axiosMock.get.mockResolvedValueOnce({data: data})
    render(<App />);
    const submit = screen.getByRole('button', {name: /submit/i});
    expect(submit).toBeInTheDocument();
    // const resolvedcompany = await screen.findByTestId("company")
    // expect(resolvedcompany).toHaveValue("MicroSoft");
    screen.debug();
  });

  // test('renders jobs from axios', async() => {
  //   render(<App />);
  //   const submit = screen.getByRole('button', {name: /submit/i});
  //   expect(submit).toBeInTheDocument();
  // });

})