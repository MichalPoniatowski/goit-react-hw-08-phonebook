import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

// const savedContacts = localStorage.getItem('contacts');

// const preloadedState = savedContacts
//   ? { contacts: JSON.parse(savedContacts) }
//   : {};

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
//   preloadedState,
// });

// store.subscribe(() => {
//   localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
// });
