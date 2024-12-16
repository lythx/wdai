import React, { useEffect, useState } from 'react';
import IArticle from '../types/IArticle';
import { Link } from 'react-router-dom';

export default function Blog() {
  const articles: IArticle[] = JSON.parse(localStorage.getItem("articles") ?? "[]")

  return (
    <div className="blog">
      {articles.map(a =>
        <>
          <div>{a.title}</div>
          <Link to={"/article/" + a.id}>Link</Link>
        </>
      )}
    </div>
  )
}
