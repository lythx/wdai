import React, { useEffect, useState } from 'react';

export default function Tytul() {
  const [title, setTitle] = useState('')
  useEffect(() => { document.title = title }, [title])
  return (
    <div style={{ margin: '10px' }}>
      <input onChange={(ev) => setTitle(ev.target.value)}></input>
    </div>
  )
}
