import React from 'react';
import Produkt from './Produkt'

export default function NowyKoszyk() {
  const products = ['granat', 'mango', 'pomarańczka', 'banan', 'cygański kłos']
  return (
    <div style={{ margin: '10px' }}>
      {products.map(p => <Produkt nazwa={p} />)}
    </div>
  )
}
