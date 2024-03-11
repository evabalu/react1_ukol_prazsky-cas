import './style.css';
import { useEffect } from 'react';
import { useState } from 'react';

export const HomePage = () => {

  const [datetime, setDatetime] = useState('');

      useEffect(() => {
        const fetchTime = async () => {
          const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Prague');
          const data = await response.json();
        setDatetime(data.datetime);
        };

        fetchTime();
      //alert('Potvrď OK');
    }, []);


  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Aktuální čas v Praze</h1>
      </header>
      <main>
          <p className='time'>{datetime}</p>
      </main>
      <footer>
        <p>Czechitas, Kurz: React 1</p>
      </footer>
    </div>
  );
};
