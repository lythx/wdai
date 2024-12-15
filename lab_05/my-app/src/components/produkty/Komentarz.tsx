import React, { useEffect, useState } from 'react';

interface KomentarzProps {
  id: number,
  body: string,
  postId: number,
  likes: number,
  user: {
    id: number,
    username: string,
    fullName: string
  }
}

export default function Komentarz({ id, body, postId, likes, user }: KomentarzProps) {
  const [num, setNum] = useState(0)
  useEffect(() => console.log('Hello world'), [])
  useEffect(() => console.log(num), [num])
  return (
    <div style={{ margin: '10px' }}>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)} >Dodaj</button>
    </div>
  )
}
