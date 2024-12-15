import React from 'react';

export default function Przycisk({ onClick }: { onClick: () => any }) {
  return (
    <button onClick={() => onClick()} >Dodaj</button>
  )
}
