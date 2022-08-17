import React,{ useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import List from './components/List';

const INITIAL_STATE = [{
  nick: 'dapelu',
  subMonths: 3,
  avatar: 'https://i.pravatar.cc/150?u=dapelu',
  description: 'Dapelu es moderador'
},
{
  nick: 'sergio_serrado',
  subMonths: 7,
  avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',      
}];

interface AppState {
  subs: Sub[],
  newSubsNumber: number
}

interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, [])
  


  return (
    <div className="App">
      <h1>Midu subs</h1>
      <List subs={subs}/>
      <Form />
    </div>
  );
}

export default App;
