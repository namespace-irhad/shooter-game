import React, { useState, useEffect } from 'react';
import Ploca from './main/container/Ploca';
import Meta from './main/components/Meta';
import { Timer } from './main/components/Timer';
import randomSeed from './logika/randomSeed';
import './App.css';

function App() {

  let randomSeed1 = randomSeed();

  const [trenutneMete, dodajMete] = useState([{
    id: 1,
    pozicijaX: randomSeed1[1],
    pozicijaY: randomSeed1[2],
    velicina: randomSeed1[0],
  }]); 
  const [brojMeta, dodajBrojMeta] = useState(0);

  const metaKliknuta = (id) => {
    console.log(brojMeta)
    let novaMeta = trenutneMete.filter(meta => meta.id !== id)
    dodajMete([...novaMeta])

    setTimeout(() => {
      dodajBrojMeta(prethodni => prethodni + 1)
    }, Math.floor(Math.random() * 2000) + 1000)
  }

 const generisanjeMeta = () => {
  let generisiInfoMete = randomSeed()

  class novaMeta {
    constructor(pozicijaX, pozicijaY, velicina) {
      this.id = Date.now();
      this.pozicijaX = pozicijaX;
      this.pozicijaY = pozicijaY;
      this.velicina = velicina;
    }
  }

  console.log("Dodaj novu metu, pozicija:", generisiInfoMete)

  dodajMete(prethodne => {
    const dodajMetu = [...prethodne, new novaMeta(generisiInfoMete[1], generisiInfoMete[2], generisiInfoMete[0])]
    return dodajMetu
  })
}

  useEffect(() => {

    if (brojMeta % 10 === 0) {
      setTimeout(() => {
      generisanjeMeta()
      }, Math.floor(Math.random() * 5000) + 1000)
    }

    generisanjeMeta()

  }, [brojMeta])

  return (
    <div className="App">
      <h2 className="header-naslov">React Igrica | Irhad Fejzić</h2>
      <Ploca>
      <Timer score={brojMeta} />

        {trenutneMete.map((metaInfo) => 
        <Meta key={metaInfo.id} metaKliknutaHandler={metaKliknuta} id_mete={metaInfo.id} pozicijaX={metaInfo.pozicijaX} pozicijaY={metaInfo.pozicijaY} velicina={metaInfo.velicina}/>)}
      
        <Meta metaKliknutaHandler={metaKliknuta} />

        <h2 className="header-naslov prikazi-score">Score: { brojMeta * 100 }</h2>
      </Ploca>
      <h3> Profesor: Adis Alihodžić </h3>
    </div>
  );
}

export default App;
