import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChangning() {
    console.log('a is changing')
  }
  function bChangning() {
    console.log('b is changing')
  }

  useEffect(function () {
    console.log('useEffect is running')
    aChangning()
    bChangning()
  }, [a, b])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() =>
        setA(a + 1)
      }>Change A</button>
      <button onClick={() =>
        setB(b - 1)
      }>Change B</button>

    </div>
  )
}

export default App
