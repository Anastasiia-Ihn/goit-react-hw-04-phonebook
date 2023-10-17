import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

const getInitialContacts = () => {
  const arrContacts = localStorage.getItem('list-contacts');
  if (arrContacts !== null) {
    return JSON.parse(arrContacts);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('list-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isElem = contacts.find(contact => {
      return contact.name === newContact.name;
    });
    if (isElem) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    return setContacts(prevState => [
      ...prevState,
      { ...newContact, id: nanoid() },
    ]);
  };

  const deleteContact = idContact =>
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== idContact)
    );

  const changeFilter = evt => setFilter(evt.currentTarget.value);

  const filterList = () => {
    const lowerWord = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(lowerWord);
    });
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />

      <h2>Contacts</h2>
      <Filter listContacts={contacts} filter={filter} onChange={changeFilter} />
      <ContactList onDelete={deleteContact} listContacts={filterList()} />
    </div>
  );
};
