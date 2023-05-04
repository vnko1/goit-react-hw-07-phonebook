import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchContacts, addContacts, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContacts.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContacts.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContacts.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState.contacts,
//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.error = null;
//       state.items = action.payload;
//       state.isLoading = false;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [addContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [addContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [deleteContact.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
export const contactsReducer = contactsSlice.reducer;
