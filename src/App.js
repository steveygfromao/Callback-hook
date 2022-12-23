import './App.css';
import React, {useCallback, useState} from 'react';

const App = () => {

  const functionsCounter = new Set();

  const [count, setCount] = useState(0);
  const [othercount, setOtherCount] = useState(0);

  const incrementCount = useCallback(()=>{
    setCount(count + 1);
  },[count]);
  
  const decrementCount = useCallback(()=>{
    setCount(count - 1);
  },[count]);

  const incrementOtherCount = useCallback(()=>{
    setOtherCount(othercount + 1);
  },[othercount]);

  functionsCounter.add(incrementCount);
  functionsCounter.add(decrementCount);
  functionsCounter.add(incrementOtherCount);
  
  console.log(functionsCounter);

  return (
    <div className="App">    
      <h1>useCallback example</h1>
      <div>
        Count:{count}
      </div>
      <div>
        otherCount: {othercount}
      </div>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>Decrement Count</button>
      <button onClick={incrementOtherCount}>Increment otherCount</button>
    </div>
  );
}

export default App;
