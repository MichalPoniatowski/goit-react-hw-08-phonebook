import { useSelector } from 'react-redux';

import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { getfilteredContacts } from '../../redux/contacts/selectors';

const ContactList = ({ children }) => {
  const filteredContacts = useSelector(getfilteredContacts);

  return (
    <div className={css.list}>
      <h2>Contacts</h2>
      {children}
      <ul>
        {filteredContacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
