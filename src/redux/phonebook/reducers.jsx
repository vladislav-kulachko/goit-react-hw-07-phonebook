import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  addFilterValue,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from './actions';

import {delContact} from './operations';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const items = createReducer([], {
  [getContactsSuccess]: (state, {payload}) => payload,
  [addContactSuccess]: (state, {payload}) => [...state, payload],
  [delContact.fulfilled]: (state, {payload}) =>
    state.filter(contact => contact.id === payload),
});
const isLoading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [delContact.pending]: () => true,
  [delContact.fulfilled]: () => false,
  [delContact.rejected]: () => false,
});
const error = createReducer(null, {
  [addContactError]: (state, {payload}) => payload,
  [addContactRequest]: () => null,
  [delContact.rejected]: (state, {payload}) => payload,
  [delContact.pending]: () => null,
});
const filter = createReducer('', {
  [addFilterValue]: (state, {payload}) => payload,
});

export const contacts = combineReducers({
  items: items,
  filter: filter,
  isLoading: isLoading,
  error: error,
});
