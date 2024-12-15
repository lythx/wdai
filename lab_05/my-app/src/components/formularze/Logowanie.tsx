import React, { useState } from 'react';

export default function Logowanie() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const disabledButton = username.length === 0 || password.length === 0 || passwordRepeat.length === 0
  const alertMessage = password === passwordRepeat ? "Zalogowano poprawnie" : "Hasła nie są zgodne"
  return (
    <div style={{ margin: '10px' }}>
      <label style={{ margin: '5px' }}>Nazwa Użytkownika</label>
      <input onChange={(ev) => setUsername(ev.target.value)} />
      <label style={{ margin: '5px' }}>Hasło</label>
      <input onChange={(ev) => setPassword(ev.target.value)} />
      <label style={{ margin: '5px' }}>Powtórz Hasło</label>
      <input onChange={(ev) => setPasswordRepeat(ev.target.value)} />
      <button onClick={() => alert(alertMessage)} disabled={disabledButton} >Logowanie</button>
    </div>
  )
}
