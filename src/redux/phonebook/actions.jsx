import {createAction} from '@reduxjs/toolkit';

export const addFilterValue = createAction('phonebook/changeFilter');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const getContactsRequest = createAction('phonebook/getContactRequest');
export const getContactsSuccess = createAction('phonebook/getContactSuccess');
export const getContactsError = createAction('phonebook/getContactError');

export const delContactRequest = createAction('phonebook/delContactRequest');
export const delContactSuccess = createAction('phonebook/delContactSuccess');
export const delContactError = createAction('phonebook/delContactError');
