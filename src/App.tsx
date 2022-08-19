import React,{ useEffect, useState, useRef } from 'react';
import './App.css';
import { Form } from './components/Form';
import List from './components/List';
import {Sub, SubsResponseFromApi} from './types';

const INITIAL_STATE = [];
const API = 'http://localhost:3001/data';
interface AppState {
  subs: Sub[],
  newSubsNumber: number
}



function App() {
  const [subs, setSubs] = useState<AppState['subs']>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0);
  const divRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (newSub: Sub) => {
    setSubs(subs => [...subs, newSub]);
    setNewSubsNumber(n => n+1);
  };


  useEffect(() => {
    const fetchSubs = (): Promise<SubsResponseFromApi> => {
      return fetch(API).then(res => res.json());
    }

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi):Array<Sub> => {
      return apiResponse.map(subFromApi => {
        const {
          nick,
          months: subMonths,
          profileUrl: avatar,
          description
        } = subFromApi;

        return {
          nick,
          description,
          avatar,
          subMonths
        }
      })
    }

    fetchSubs()
      .then(mapFromApiToSubs)
      .then(setSubs)

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
