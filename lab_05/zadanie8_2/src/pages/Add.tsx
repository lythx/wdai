import React, { useEffect, useState } from 'react';
import IArticle from '../types/IArticle';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const navigate = useNavigate();
  const articles: IArticle[] = JSON.parse(localStorage.getItem("articles") ?? "[]")
  const nextId = (articles.length === 0) ? 1 : (articles.at(-1)!.id + 1)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const handleAdd = () => {
    localStorage.setItem("articles", JSON.stringify([...articles, { id: nextId, title, body }]))
    navigate('/blog')
  }
  return (
    <div className={"add"}>
      <label>Tytuł</label>
      <input onChange={(ev) => setTitle(ev.target.value)} />
      <label>Treść</label>
      <textarea onChange={(ev) => setBody(ev.target.value)} />
      <button onClick={() => handleAdd()}>DODAJ</button>
    </div>
  )
}
