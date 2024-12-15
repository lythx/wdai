import React, { useState } from 'react';

export default function Formularz() {
  const [text, setText] = useState('')
  return (
    <div style={{ margin: '10px' }}>
      <input onChange={(ev) => setText(ev.target.value)} />
      <div style={{ margin: '5px' }}>{text}</div>
    </div>
  )
}
