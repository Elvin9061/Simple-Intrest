import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';

function App() {
//js code

const [Principle, setPrinciple]=useState();
const [Rate, setRate]= useState();
const [Year, setYear]= useState();
const [Intrest, setIntrest]= useState(0);
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(Principle);
  console.log(Rate);
  console.log(Year);
  let result=Principle*Rate*Year/100;
setIntrest(result);
}
function clear(){
  setPrinciple('');
  setRate('');
  setYear('');
  setIntrest(0);
}

  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{ height: "70vh" }}>
      <div style={{ width: "500px" }} className='bg-light p-5 rounded'>
        <h3>Simple Intrest</h3>
        <p>Calculate Your Intrest Easily</p>
        <div style={{ height: "150ph" }} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1>{'\u20B9'}{Intrest}</h1>
          <p>Your Total Intrest</p>
        </div>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
          <div className='mb-5'>
            <div className='mt-5'>
              <TextField id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' value={Principle} onChange={(e)=>setPrinciple(e.target.value)}/>
            </div>
            <div className='mt-2'>
              <TextField id="outlined-basic" label="Rate of Intrest (pa)%" variant="outlined" className='w-100' value={Rate} onChange={(e)=>setRate(e.target.value)}/>
            </div>
            <div className='mt-2'>
              <TextField id="outlined-basic" label="Year" variant="outlined" className='w-100' value={Year} onChange={(e)=>setYear(e.target.value)}/>
            </div>
            <div className='mt-5'>
              <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success" type='submit'>Calculate</Button>
              <Button variant="contained" color="error" onClick={clear}>Resset</Button>
              </Stack>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
