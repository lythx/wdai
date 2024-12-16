import React, { useEffect, useState } from 'react';
import Komentarz, { Comment } from './Komentarz';

export default function Komentarze() {
  const [comments, setComments] = useState<Comment[]>([])
  useEffect(() => {
    fetch("https://dummyjson.com/comments").then(async (res) => {
      const data = await res.json()
      setComments(data.comments)
    })
  }, [])
  return (
    <div style={{ margin: '10px' }}>
      {comments.map(comment =>
        <Komentarz data={comment} />
      )}
    </div>
  )
}
