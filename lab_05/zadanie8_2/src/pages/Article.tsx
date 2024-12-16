import React, { useEffect, useState } from 'react';
import IArticle from '../types/IArticle';
import { useParams } from 'react-router-dom';

export default function Article() {
  const { id } = useParams();
  const allArticles: IArticle[] = JSON.parse(localStorage.getItem("articles") ?? "[]")
  const article = allArticles.find(a => a.id === Number(id))
  if (article === undefined) {
    return (<div style={{margin: '10px', padding: '10px'}}>No such article</div>)
  }
  return (
    <div className={"article"}>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  )
}
