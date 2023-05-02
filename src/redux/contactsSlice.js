import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    fetchingInProgress: state => ({ ...state, isLoading: true }),
    fetchAllContactsSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      items: [...action.payload],
    }),
    addContactSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      items: [...state.items, action.payload],
    }),
    deleteContactSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      items: [
        ...state.items.filter(contact => contact.id !== action.payload.id),
      ],
    }),
    fetchingError: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});

export const {
  fetchingInProgress,
  fetchingError,
  fetchAllContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
