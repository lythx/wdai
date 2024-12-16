import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface IProduct {
  id: number 
  title: string
  category: string
  brand: string 
}

export default function Product({ id, title, category, brand } : IProduct) {
  const navigate = useNavigate()
  return (
    <tr onClick={() => navigate("/product/" + id)} className={"product"}>
      <td>{title}</td>
      <td>{category}</td>
      <td>{brand}</td>
    </tr>
  )
}
