import React, { useState } from 'react';
import Dodawanie from './Dodawanie';

interface Student {
  imie: string,
  nazwisko: string,
  rocznik: number
}


export default function StudentManager() {
  const [students, setStudents] = useState<Student[]>(
    [{ imie: 'Jan', nazwisko: 'Kowalski', rocznik: 2002 },
    { imie: 'Maciej', nazwisko: 'Nowak', rocznik: 2003 },
    { imie: 'Kamil', nazwisko: 'Lipski', rocznik: 2001 }]
  )
  return (
    <div style={{ margin: '10px' }}>
      <table style={{ margin: 'auto' }}>
        {students.map(student =>
          <tr>
            <td>{student.imie}</td>
            <td>{student.nazwisko}</td>
            <td>{student.rocznik}</td>
          </tr>
        )}
        <Dodawanie onAdd={(imie, nazwisko, rocznik) =>
          setStudents(prev => [...prev, { imie, nazwisko, rocznik }])} />
      </table>
    </div>
  )
}
