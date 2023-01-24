## Callback Hook Example

Callback hook demonstration (Stops functions being recreated that don't need to be)

This is a more complex hook but does save the browser calling many renders that aren't needed.

## Introduction
The main purpose of React useCallback hook is to memoize functions. The main reason for this is increasing performance of your React applications. How is this related? Every time your component re-renders it also re-creates functions that are defined inside it. Memoizing functions helps you prevent this.

When you memoize a function with useCallback hook that function is basically stored in cache. Quick example. Imagine that something causes your component to re-render. Let's say there is a change of state. Usually, this re-render would, by default, also cause React to re-create all functions defined in your component.

This may not happen with useCallback hook and memoization. When you memoize a function React may not re-create that function just because the component re-rendered. Instead, React can skip the re-creation and return the memoized function. This can help you save resources and time and improve performance of your application

# Basic syntax of useCallback

```javascript
import { useCallback } from 'react'

export default function App() {
  // Use useCallback to memoize function:
  const memoizedFunc = useCallback(() => {
    someFunction() // Function that will be memoized.
  }, [/* depOne, depTwo, ...dep */]) // <= Dependency array.

  // A bit shorter version: (I prefer this)
  const memoizedFunc = useCallback(() => someFunction(), [])

  return (
    <div className="App">
      {/* Your component */}
    </div>
  )
}
```

The example I have done uses a counter to increment and decrement, you will see the functions used in the callback like so:

```javascript
const incrementCount = useCallback(()=>{
    setCount(count + 1);
  },[count]);
  
  const decrementCount = useCallback(()=>{
    setCount(count - 1);
  },[count]);

  const incrementOtherCount = useCallback(()=>{
    setOtherCount(othercount + 1);
  },[othercount]);
```

Note the use of dependency array.  Using the useCallback stops react re-creating the functions again.
