import React from 'react';

export default function Produkt({ nazwa }: { nazwa: string }) {
  return (
    <div style={{ border: '1px solid black', width: '200px', margin: 'auto' }}>
      {nazwa}
    </div>
  )
}
