import React, { useState } from 'react';

export default function Ternary() {
  const a = true
  const b = false
  return (
    <div style={{ margin: '10px' }}>
      <div>Stwierdzenie a jest {a ? "prawdziwe" : "fałszywe"}</div>
      <div>Stwierdzenie b jest {b ? "prawdziwe" : "fałszywe"}</div>
    </div>
  )
}
