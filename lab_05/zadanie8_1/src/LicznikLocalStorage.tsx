import React, { useState } from 'react';

export default function LicznikLocalStorage() {
  const localStorageNum = localStorage.getItem("num")
  const [num, setNum] = useState(localStorageNum === null ? 0 : Number(localStorageNum))
  return (
    <div style={{ margin: '10px' }}>
      <div>{num}</div>
      <button onClick={() => {
        setNum(prev => {
          localStorage.setItem("num", (prev + 1).toString())
          return prev + 1
        })
      }} >Dodaj</button>
    </div>
  )
}