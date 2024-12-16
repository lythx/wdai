import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const allProducts: any[] = JSON.parse(localStorage.getItem("products") ?? "[]")
  const product = allProducts.find(a => a.id === Number(id))
  if (product === undefined) {
    return (<div style={{margin: '10px', padding: '10px'}}>No such product</div>)
  }
  return (
    <div className={"product-details"}>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  )
}
