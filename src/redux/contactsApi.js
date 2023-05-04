import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://644fa705ba9f39c6ab68c233.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: build => ({
    fetchContacts: build.query({
      query: () => '/contacts',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post'],

      // provideTags: ['Contact'],
    }),
    addContact: build.mutation({
      query: contact => ({ url: 'contacts', method: 'POST', body: contact }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: build.mutation({
      query: id => ({ url: `contacts/${id}`, method: 'DELETE' }),
      // invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
