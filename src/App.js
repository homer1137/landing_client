import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  const [time, setTime] = useState(0);
  const [workingTimer, setWorkingTimer] = useState(false)
  useEffect(()=>{
    if(workingTimer){
      let int=setTimeout(()=>{setTime((prev)=>prev+1)},1000)
    return ()=>clearTimeout(int)
    }
    
  },[time])
  function startTimer(){
    setWorkingTimer((prev)=>!prev)
    setTime((prev)=>prev+1)
  }
  return (
    <>
      <button onClick={startTimer}>{workingTimer?'Stop':'Start'}</button>
      {time}
      <Counter/>
    </>
  );
}

export default App;
