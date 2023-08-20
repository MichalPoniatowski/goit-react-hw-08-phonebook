import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// import './App.css';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { fetchContacts } from '../../redux/contacts/actions';
import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(state => {
    console.log('isLoading state:', state.contacts.isLoading);
    return state.contacts.isLoading;
  });

  const isError = useSelector(state => {
    console.log('isError state:', state.contacts.error);
    return state.contacts.error;
  });

  return (
    <div className={css.wrapper}>
      <ContactForm />
      {isLoading && !isError && <p>Fetching data...</p>}
      {isError && <p>Something went wrong</p>}
      <ContactList>
        <Filter />
      </ContactList>
    </div>
  );
};
