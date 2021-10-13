import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from './actions';
import {
  addContactQuery,
  getContactsQuery,
  delContactQuery,
} from '../../Api/Api';

export const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    dispatch(getContactsSuccess(await getContactsQuery()));
  } catch (error) {
    getContactsError(error.message);
  }
};
export const addContact = (name, number) => async dispatch => {
  const contact = {name: name, number: number};
  dispatch(addContactRequest());
  try {
    dispatch(addContactSuccess(await addContactQuery(contact)));
  } catch (error) {
    dispatch(addContactError(error.name));
  }
};
// export const delContact = id => async dispatch => {
//   dispatch(delContactRequest());
//   try {
//     await delContactQuery(id);
//     dispatch(delContactSuccess(id));
//   } catch (error) {
//     dispatch(delContactError(error));
//   }
// };

export const delContact = createAsyncThunk(
  'phonebook/delContact',
  async (id, {rejectWithValue}) => {
    try {
      await delContactQuery(id);
      return id;
    } catch (err) {
      rejectWithValue(err.name);
    }
  },
);
