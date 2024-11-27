import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    return savedContacts ? savedContacts : [];
  });
  const [searchQuery, setSearchQuery] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, newContact];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={searchQuery} onChange={handleSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
