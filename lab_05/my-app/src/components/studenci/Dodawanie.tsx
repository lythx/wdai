import React, { useState } from 'react';


export default function Dodawanie({ onAdd }: { onAdd: (imie: string, nazwisko: string, rocznik: number) => any }) {
  const [imie, setImie] = useState('')
  const [nazwisko, setNazwisko] = useState('')
  const [rocznik, setRocznik] = useState('')
  const disabledButton = imie.length === 0 || nazwisko.length === 0 || isNaN(Number(rocznik))
  return (
    <div style={{ margin: '10px' }}>
      <label style={{ margin: '5px' }}>Imię</label>
      <input onChange={(ev) => setImie(ev.target.value)} value={imie} />
      <label style={{ margin: '5px' }}>Nazwisko</label>
      <input onChange={(ev) => setNazwisko(ev.target.value)} value={nazwisko} />
      <label style={{ margin: '5px' }}>Rocznik</label>
      <input onChange={(ev) => setRocznik(ev.target.value)} value={rocznik} />
      <button onClick={() => {
        onAdd(imie, nazwisko, Number(rocznik))
        setImie("")
        setNazwisko("")
        setRocznik("")
      }} disabled={disabledButton} >Dodaj</button>
    </div>
  )
}
