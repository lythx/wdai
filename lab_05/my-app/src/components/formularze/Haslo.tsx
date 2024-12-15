import React, { useState } from 'react';

export default function Haslo() {
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const text = (password.length === 0 && passwordRepeat.length === 0) ? "Proszę wprowadzić hasło" :
    (password === passwordRepeat ? "" : "Hasła nie są zgodne")
  return (
    <div style={{ margin: '10px' }}>
      <label style={{ margin: '5px' }}>Hasło</label>
      <input onChange={(ev) => setPassword(ev.target.value)} />
      <label style={{ margin: '5px' }}>Powtórz Hasło</label>
      <input onChange={(ev) => setPasswordRepeat(ev.target.value)} />
      <div style={{ margin: '5px' }}>{text}</div>
    </div>
  )
}
