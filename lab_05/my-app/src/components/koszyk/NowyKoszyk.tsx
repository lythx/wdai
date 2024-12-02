import React from 'react';
import Produkt from './Produkt'

export default function NowyKoszyk() {
  const products = ['granat', 'mango', 'pomarańczka', 'banan', 'cygański kłos']
  return(
    <>
      {products.map(p => <Produkt nazwa={p} />)}
    </>
  )
}
