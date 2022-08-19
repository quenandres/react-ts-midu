import React,{ useEffect, useState, useRef } from 'react';
import './App.css';
import { Form } from './components/Form';
import List from './components/List';
import {Sub} from './types';
import { getAllSubs } from './services/getAllSubs';

const INITIAL_STATE = [];
interface AppState {
  subs: Sub[],
  newSubsNumber: number
}



function App() {
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0);
  const divRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (newSub: Sub) => {
    setSubs(subs => [...subs, newSub]);
    setNewSubsNumber(n => n + 1);
  };


  const [subs, setSubs] = useState<AppState['subs']>([]);
  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  return (
    <div className="App" ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs}/>
      new Subs: {newSubsNumber}
      <Form onNewSub={handleSubmit}/>
    </div>
  );
}

export default App;
