import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
