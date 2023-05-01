import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { fetchContacts, selectIsLoading, selectError } from 'redux/index';
import { ContactForm, ContactList, Filter } from './phoneBook';
import { Loader } from './phoneBook/loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    if (error) {
      toast.error(error);
    }
  }, [dispatch, error]);

  return (
    <div>
      {isLoading && <Loader />}
      <section>
        <div className="container">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          {/* <ContactList /> */}
          {!isLoading && !error && <ContactList />}
          <Toaster />
        </div>
      </section>
    </div>
  );
};
