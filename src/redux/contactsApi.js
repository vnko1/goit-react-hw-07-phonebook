import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://644fa705ba9f39c6ab68c233.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    fetchContacts: build.query({
      query: () => ({ url: '/contacts' }),
      provideTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: contact => ({ url: 'contacts', method: 'POST', body: contact }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: id => ({ url: `contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
