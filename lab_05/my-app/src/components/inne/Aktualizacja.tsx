import React, { useState } from 'react';

export default function Aktualizacja() {
  const [product, setProduct] = useState({ nazwa: "Pomidor", cena: 50 })
  return (
    <div style={{ margin: '10px' }}>
      <div>Aktualnie {product.nazwa} kosztuje {product.cena}</div>
      <button onClick={() => setProduct(prevState => ({ ...prevState, cena: 100 }))} >Zmień cenę</button>
    </div>
  )
}
