import { useDispatch } from 'react-redux';

import css from './Filter.module.css';
import { filterContacts } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFiltredContacts = event => {
    event.preventDefault();
    const filteredContact = event.target.value;
    dispatch(filterContacts(filteredContact.toLowerCase().trim()));
  };

  return (
    <div className={css.filter}>
      <span>Find contacts by name: </span>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFiltredContacts}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Filter;
