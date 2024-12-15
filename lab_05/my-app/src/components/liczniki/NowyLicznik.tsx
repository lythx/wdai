import React, { useState } from 'react';
import Przycisk from './Przycisk';

export default function NowyLicznik() {
  const [num, setNum] = useState(0)
  return (
    <div style={{ margin: '10px' }}>
      <div>{num}</div>
      <Przycisk onClick={() => setNum(num + 1)} />
    </div>
  )
}
