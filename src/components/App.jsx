import {Phonebook} from './Phonebook';
import {Filter} from './Filter';
import {Contacts} from './Contacts';

export const App = () => {
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
