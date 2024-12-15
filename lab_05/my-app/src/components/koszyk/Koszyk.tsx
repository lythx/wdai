import React from 'react';
import Produkt from './Produkt'

export default function Koszyk() {
  return (
    <div style={{ margin: '10px' }}>
      <Produkt nazwa='gruz' />
      <Produkt nazwa='beton' />
      <Produkt nazwa='WD-40' />
      <Produkt nazwa='żelbet' />
      <Produkt nazwa='betoniara 4000' />
    </div>
  )
}
