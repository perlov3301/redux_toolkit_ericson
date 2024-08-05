import React, { useState } from 'react'
import { useAppDispatch, 
  useAppSelector } from './app/hooks.ts';
import { incremented, amountAdded } from './features/counter/counter-slice.ts';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice.ts';
import './App.css';

function App() { // all is built in
  // get initial value from counter-slice.ts->store.ts->App.tsx
  const count = useAppSelector((state)=> 
                           state.counter.value);
  // dispatch action: to increment value or reset
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);

  const { data= [], isFetching } = useFetchBreedsQuery(numDogs);

  function handleClick () {
  // increment by 1:
  //dispatch(incremented());
  // increment by fixed amount:
    dispatch(amountAdded(3));
  }
  return (
    <>
      <div>
       
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          <button onClick={()=> handleClick()} >
            count is {count}
          </button>
        </p>

        <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} 
              onChange={(e)=> setNumDogs(Number(e.target.value))} >
            <option value="3" > 3 </option>
            <option value="5" > 5 </option>
            <option value="10" >10 </option>
            <option value="20" >20 </option>
            <option value="50" >50 </option>

          </select>
        </div>

        <div>
          <p>
             number of dogs fetched: {data.length}
          </p> 
          <table>
            <thead> 
              <tr>
                <th >Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed)=>(
                <tr key={breed.id}>
                  <td>{breed.name} </td>
                  <td>
                    <img src={breed.image.url} 
                      alt={breed.name} 
                      height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
