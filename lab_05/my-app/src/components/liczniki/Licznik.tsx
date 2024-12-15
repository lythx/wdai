import React, { useState } from 'react';

export default function Licznik() {
  const [num, setNum] = useState(0)
  return (
    <div style={{ margin: '10px' }}>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)} >Dodaj</button>
    </div>
  )
}
