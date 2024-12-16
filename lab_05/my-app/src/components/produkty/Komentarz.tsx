import React, { useEffect, useState } from 'react';

export interface Comment {
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

export default function Komentarz({ data: { id, body, postId, likes: initialLikes, user } }: { data: Comment }) {
  const [likes, setLikes] = useState(initialLikes)
  return (
    <div className={"comment-container"} style={{ marginTop: '10px' }}>
      <div className={"comment-user"}>{user.fullName} - @{user.username} - user id: {user.id}</div>
      <div className={"comment-body"}>{body}</div>
      <div className={"comment-id"}>comment id: {id} - post id: {postId}</div>
      <div className={"comment-likebt"} onClick={() => setLikes(prev => prev + 1)}></div>
      <div className={"comment-dislikebt"} onClick={() => setLikes(prev => prev - 1)}></div>
      <div className={"comment-likes"}>{likes}</div>
    </div>
  )
}