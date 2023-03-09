import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = values => {
    const { name } = values;
    if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts!`);
    } else {
      const newContact = { id: nanoid(), ...values };
      const updatedContacts = [...this.state.contacts, newContact];
      this.setState({ contacts: updatedContacts });
    }
  };
  

  onChangeFilter = evt => {
    const filterValue = evt.target.value;
    this.setState({ filter: filterValue });
  };

  onDeleteContact = id => {
    const updatedContacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const filterToLoverCase = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLoverCase)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.onSubmitForm} id={nanoid()} />
        {this.state.contacts.length === 0 ? (
          <></>
        ) : (
          <>
            <h2>Contacts</h2>
            <Filter id={nanoid()} onChangeFilter={this.onChangeFilter} />
            <ContactList filteredContacts={filteredContacts} onDeleteContact={this.onDeleteContact} />
          </>
        )}
      </>
    );
  }
}
export default App;
