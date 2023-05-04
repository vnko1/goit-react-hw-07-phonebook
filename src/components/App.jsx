import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/index';
import { ContactForm, ContactList, Filter } from './phoneBook';
import { Loader } from './phoneBook/loader/Loader';

export const App = () => {
  const { data, isFetching, isError, error } = useFetchContactsQuery();

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <>
      {isFetching && <Loader />}
      <section>
        <div className="container">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          {!isFetching && !isError && <ContactList contacts={data} />}
          <Toaster />
        </div>
      </section>
    </>
  );
};
