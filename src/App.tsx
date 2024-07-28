import React from 'react'
import { useAppDispatch, 
  useAppSelector } from './app/hooks.ts';
import { incremented } from './features/counter/counter-slice.ts'
import './App.css';

function App() { // all is built in
  // get initial value from counter-slice.ts->store.ts->App.tsx
  const count = useAppSelector((state)=> state.counter.value);
  // dispatch action: to increment value or reset
  const dispatch = useAppDispatch();
  function handleClick () {
    dispatch(incremented());
  }
  return (
    <>
      <div>
       
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=> handleClick()} >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
