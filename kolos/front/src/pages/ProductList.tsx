import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product, {IProduct} from './components/Product';
import Search from './components/Search';

export default function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [searchStr, setSearchStr] = useState('')
  const [tableMargin, setTableMargin] = useState(20)
  const [isRunning, setIsRunning] = useState(false)
  const [timestamp, setTimestamp] = useState(0)
  useEffect(() => {
    fetch("https://dummyjson.com/products").then(async res => {
      const data = await res.json()
      setProducts(data.products)
      localStorage.setItem("products", JSON.stringify(data.products))
      setTimeout(() => {
        setTimestamp(Date.now())
        setIsRunning(true)
      }, 3000)
    })
  }, [])
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning) {
        const date = Date.now()
        setTableMargin(() => Math.min(Math.abs(20 - (date - timestamp) / 100), 20));
      }
    }, 30)
    return () => clearInterval(intervalId)
  }, [isRunning, timestamp])
  return (
    <div className={"product-list"}>
      <Search onChange={(s) => setSearchStr(s)} />
      <table style={{ marginTop: tableMargin + 'px' }}>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Brand</th>
        </tr>
        {products.filter(a => a.title.toLowerCase().startsWith(searchStr.toLowerCase())).map(a => 
          <Product id={a.id} title={a.title} brand={a.brand} category={a.category} />
        )}
      </table>
    </div>
  )
}
