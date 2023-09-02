import {Phonebook} from './Phonebook';
import {Filter} from './Filter';
import {Contacts} from './Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/reducer';

export const App = () => {
const dispatch= useDispatch()
useEffect(()=>{
  dispatch(fetchContacts())
},[dispatch])
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Phonebook</h1>
      <Phonebook />
      <h2 style={{textAlign: 'center'}}>Contact</h2>
      <Filter />
      <Contacts />
    </div>
  );
};
