import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={"home"}>
      <h1>Witaj!</h1>
      <Link to="/blog">Blog</Link>
    </div>
  )
}
