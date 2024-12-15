import React from 'react';
import logo from './logo.svg';
import './App.css';
import Koszyk from './components/koszyk/Koszyk';
import NowyKoszyk from './components/koszyk/NowyKoszyk';
import Licznik from './components/liczniki/Licznik';
import NowyLicznik from './components/liczniki/NowyLicznik'
import Formularz from './components/formularze/Formularz'
import Haslo from './components/formularze/Haslo';
import Logowanie from './components/formularze/Logowanie';
import Ternary from './components/inne/Ternary';
import Aktualizacja from './components/inne/Aktualizacja';
import Studenci from './components/studenci/Studenci';
import StudentManager from './components/studenci/StudentManager';
import Odliczanie from './components/efekty/Odliczanie';
import Tytul from './components/efekty/Tytul';

function App() {
  return (
    <div className="App">
      <Koszyk />
      <NowyKoszyk />
      <Licznik />
      <NowyLicznik />
      <Formularz />
      <Haslo />
      <Logowanie />
      <Ternary />
      <Aktualizacja />
      <Studenci />
      <StudentManager />
      <Licznik />
      <Tytul />
      <Odliczanie />
    </div>
  );
}

export default App;
