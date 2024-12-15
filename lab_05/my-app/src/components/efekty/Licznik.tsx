import React, { useEffect, useState } from 'react';

export default function Licznik() {
  const [num, setNum] = useState(0)
  useEffect(() => console.log('Hello world'), [])
  useEffect(() => console.log(num), [num])
  return (
    <div style={{ margin: '10px' }}>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)} >Dodaj</button>
    </div>
  )
}
