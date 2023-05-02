import axios from 'axios';
import {
  fetchingInProgress,
  fetchingError,
  fetchAllContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,
} from './contactsSlice';
axios.defaults.baseURL = 'https://644fa705ba9f39c6ab68c233.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const { data } = await axios.get('/contacts');
    dispatch(fetchAllContactsSuccess(data));
  } catch (e) {
    dispatch(fetchingError(e));
  }
};

export const addContacts = contact => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (e) {
    dispatch(fetchingError(e));
  }
};

export const deleteContact = id => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const { data } = await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(data));
  } catch (e) {
    dispatch(fetchingError(e));
  }
};
