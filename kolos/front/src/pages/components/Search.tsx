import React, { useEffect, useState } from 'react';

export default function Search({ onChange } :{ onChange: (searchStr: string) => any }) {
  return (
    <div className={'search'}>
      <label>Szukaj: </label>
      <input onChange={(ev) => onChange(ev.target.value)}></input>
    </div>
  )
}
