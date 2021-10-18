import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {addFilterValue} from './actions';

import {delContact, addContact, getContacts} from './operations';

const items = createReducer([], builder => {
  builder
    .addCase(getContacts.fulfilled, (state, {payload}) => payload)
    .addCase(addContact.fulfilled, (state, {payload}) => [...state, payload])
    .addCase(delContact.fulfilled, (state, {payload}) =>
      state.filter(({id}) => id !== payload),
    );
});
const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [delContact.pending]: () => true,
  [delContact.fulfilled]: () => false,
  [delContact.rejected]: () => false,
});
const error = createReducer(null, {
  [addContact.rejected]: (state, {payload}) => payload,
  [addContact.pending]: () => null,
  [delContact.rejected]: (state, {payload}) => payload,
  [delContact.pending]: () => null,
  [getContacts.rejected]: (state, {payload}) => payload,
  [getContacts.pending]: () => null,
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
