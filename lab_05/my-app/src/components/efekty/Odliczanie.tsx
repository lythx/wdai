import React, { useEffect, useState } from 'react';

export default function Odliczanie() {
  const [licznik, setLicznik] = useState(15000)
  const [isRunning, setIsRunning] = useState(false)
  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning) {
        const date = Date.now()
        setLicznik(prev => Math.max(prev - (date - lastUpdateTimestamp), 0));
        setLastUpdateTimestamp(date)
      }
    }, 30)
    return () => clearInterval(intervalId)
  }, [licznik, lastUpdateTimestamp, isRunning])

  const handleClick = () => {
    if (isRunning) {
      setIsRunning(false)
    } else {
      setIsRunning(true)
      setLastUpdateTimestamp(Date.now())
    }
  }

  const isEnd = licznik === 0
  const buttonText = isEnd ? 'Odliczanie zakończone' :
    (isRunning ? 'STOP' : 'START')
  return (
    <div style={{ margin: '10px' }}>
      <div>{(licznik / 1000).toFixed(1)} sek</div>
      <button disabled={isEnd} onClick={() => handleClick()} >{buttonText}</button>
    </div>
  )
}
